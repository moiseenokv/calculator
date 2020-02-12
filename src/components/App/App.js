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
      calc: false,
      inputsCommonTradeIn: 0,
      inputsCommonDownPayment: 0,
      inputsCommonCreditScore: 1.2,
      inputsCommonPostCode: 0,
      inputsLoanTerm: 24,
      inputsLoanApr: 0,
      inputsLeaseTerm: 0,
      inputsLeaseMileage: 12000,
      loanCalcResult: 10,
      leaseCalcResult: 10,
      taxes: '',
      msrp: 0,
      dealerName: '',
      dealerPhone: '',
      dealerRating: '',
      vehicleName: '',
      results: {
        loan: 10,
        lease: 10,
      },
    };

    this.state = (this.storage.restoreData() === false) ? this.initialState
      : this.storage.restoreData();

    this.changeState = (state) => {
      this.setState(state);
      global.console.log(this.state);
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
            msrp: result.msrp,
            dealerName: result.dealerName,
            dealerPhone: result.dealerPhone,
            dealerRating: result.dealerRating,
            vehicleName: result.vehicle,
          };
          this.setState(vendorObjectData);
        }));
    };
  }

  componentDidMount() {
    this.getPostal();
    this.getDealerData();
    global.console.log(this.state);
  }

  componentDidUpdate() {
    this.storage.saveData(this.state);
  }


  render() {
    const {
      activeLoanView, loanCalcResult, leaseCalcResult, inputsCommonTradeIn,
      inputsCommonDownPayment, inputsCommonCreditScore, inputsCommonPostCode,
      inputsCommonMsrp, inputsLoanTerm, inputsLoanApr, inputsLeaseTerm,
      inputsLeaseMileage, msrp, calc,
    } = this.state;
    const commonData = {
      inputsCommonTradeIn,
      inputsCommonDownPayment,
      inputsCommonCreditScore,
      inputsCommonPostCode,
      inputsCommonMsrp,
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
        <InfoCard />
      </Wrapper>
    );
  }
}
