/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import '../../assets/data/vendorData.json';
import './App.scss';
import Wrapper from '../wrapper';
import InfoCard from '../info';
import Calc from '../calc';
import Nav from '../nav';
import Loan from '../loan';
import Lease from '../lease';
import Localstorage from '../../utils/localstorage';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.storage = new Localstorage('state');

    this.initialState = {
      activeLoanView: true,
      activeMenuLoanView: true,
      tradeInCode: '',
      paymentCode: '',
      calc: false,
      inputsCommonTradeIn: 0,
      inputsCommonDownPayment: 0,
      inputsCommonCreditScore: 1.2,
      inputsCommonPostCode: 0,
      inputsLoanTerm: 24,
      inputsLoanApr: 1,
      inputsLeaseTerm: 36,
      inputsLeaseMileage: 12000,
      loanCalcResult: 10,
      leaseCalcResult: 10,
      taxes: '',
      msrp: 0,
      dealerName: '',
      dealerPhone: '',
      dealerRating: '',
      vehicleName: '',
    };

    this.state = (this.storage.restoreData() === false) ? this.initialState
      : this.storage.restoreData();

    this.changeState = (state) => {
      Promise.resolve(this.setState(state))
        .then(this.validationData())
        .then(() => this.calcData());
    };

    this.getPostal = () => {
      const { inputsCommonPostCode } = this.state;
      if (inputsCommonPostCode <= 0) {
        Promise.resolve(fetch('https://ipinfo.io/?token=33141d9960d563')
          .then((data) => data.json())
          .then((result) => {
            const dataTaxes = result.postal.split('').map((num) => num * 11).join(', ');
            this.setState({ inputsCommonPostCode: result.postal, taxes: dataTaxes });
          }));
      }
    };

    this.getDealerData = () => {
      Promise.resolve(fetch('../../assets/data/vendorData.json')
        .then((data) => data.json())
        .then((result) => {
          const vendorObjectData = {
            msrp: 1 * result.msrp,
            dealerName: result.dealerName,
            dealerPhone: result.dealerPhone,
            dealerRating: result.dealerRating,
            vehicleName: result.vehicle,
          };
          this.setState(vendorObjectData);
        }));
    };

    this.validationData = () => {
      const { msrp, inputsCommonTradeIn, inputsCommonDownPayment } = this.state;
      let errorCounter = 0;
      if ((parseInt(inputsCommonTradeIn, 10)) <= 0) {
        errorCounter += 1;
        this.setState({ tradeInCode: '0x02' });
      } else if (parseInt(inputsCommonTradeIn, 10) > (parseInt(msrp, 10) / 4)) {
        errorCounter += 1;
        this.setState({ tradeInCode: '0x01' });
      } else {
        this.setState({ tradeInCode: '' });
      }

      if ((parseInt(inputsCommonDownPayment, 10)) <= 0) {
        errorCounter += 1;
        this.setState({ paymentCode: '0x02' });
      } else if (parseInt(inputsCommonDownPayment, 10) > (parseInt(msrp, 10) / 4)) {
        errorCounter += 1;
        this.setState({ paymentCode: '0x01' });
      } else {
        this.setState({ paymentCode: '' });
      }

      if (errorCounter > 0) {
        this.setState({ calc: false });
      } else {
        this.setState({ calc: true });
      }
    };

    this.calcData = () => {
      const {
        inputsCommonTradeIn, inputsCommonDownPayment, inputsCommonCreditScore,
        inputsLoanTerm, inputsLeaseTerm, inputsLoanApr, inputsLeaseMileage,
        msrp, calc,
      } = this.state;

      if (calc) {
        const commonPart = msrp - inputsCommonTradeIn - inputsCommonDownPayment;
        const loanFirstPart = inputsLoanTerm * inputsCommonCreditScore * inputsLoanApr;
        const leaseFirstPart = inputsLeaseMileage / 10000;
        const leaseSecondPart = (inputsLeaseTerm * inputsCommonCreditScore);
        const loanCalc = commonPart / loanFirstPart;
        const leaseCalc = (commonPart * leaseFirstPart) / leaseSecondPart;
        this.setState(
          {
            loanCalcResult: loanCalc.toFixed(0), leaseCalcResult: leaseCalc.toFixed(0),
          },
        );

        global.console.log(loanCalc.toFixed(0), leaseCalc.toFixed(0));
      }
    };
  }

  componentDidMount() {
    Promise.resolve(this.getPostal());
    Promise.resolve(this.getDealerData())
      .then(this.validationData())
      .then(this.calcData());
  }

  componentDidUpdate() {
    this.storage.saveData(this.state);
  }

  render() {
    const {
      activeLoanView, loanCalcResult, leaseCalcResult, inputsCommonTradeIn,
      inputsCommonDownPayment, inputsCommonCreditScore, inputsCommonPostCode,
      inputsCommonMsrp, inputsLoanTerm, inputsLoanApr, inputsLeaseTerm,
      inputsLeaseMileage, msrp, calc, dealerName, dealerPhone, dealerRating,
      vehicleName, taxes, tradeInCode, paymentCode,
    } = this.state;
    const commonData = {
      inputsCommonTradeIn,
      inputsCommonDownPayment,
      inputsCommonCreditScore,
      inputsCommonPostCode,
      inputsCommonMsrp,
      tradeInCode,
      paymentCode,
    };
    const loanData = {
      ...commonData,
      ...{
        inputsLoanTerm, inputsLoanApr, msrp, calc,
      },
    };
    const leaseData = {
      ...commonData,
      ...{
        inputsLeaseTerm, inputsLeaseMileage, msrp, calc,
      },
    };

    const cardData = {
      MSRP: msrp,
      Vehicle: vehicleName,
      Loan: loanCalcResult,
      Lease: leaseCalcResult,
      Taxes: taxes,
      Dealer: dealerName,
      Phone: dealerPhone,
      Rating: dealerRating,
    };

    return (
      <Wrapper>
        <Calc>
          <Nav loan = {activeLoanView}
               cb={this.changeState}
               res={{ loan: loanCalcResult, lease: leaseCalcResult }}
          />
         {(activeLoanView) ? <Loan data={loanData} cb={this.changeState} />
           : <Lease data={leaseData} cb={this.changeState} />}
        </Calc>
        <InfoCard data={cardData} loan = {activeLoanView} />
      </Wrapper>
    );
  }
}
