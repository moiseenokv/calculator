/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './App.scss';
import Wrapper from '../wrapper';
import InfoCard from '../info';
import Calc from '../calc';
import Nav from '../nav';
import Loan from '../loan';
import Lease from '../lease';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLoanView: true,
      activeMenuLoanView: true,
      inputsCommonTradeIn: 0,
      inputsCommonDownPayment: 0,
      inputsCommonCreditScore: 1.2,
      inputsCommonPostCode: null,
      inputsCommonMsrp: 0,
      inputsLoanTerm: 24,
      inputsLoanApr: 0,
      inputsLeaseTerm: 0,
      inputsLeaseMileage: 0,
      loanCalcResult: 10,
      leaseCalcResult: 10,
      outputs: {},
      results: {
        loan: 10,
        lease: 10,
      },
    };

    this.changeState = (state) => {
      this.setState(state);
      global.console.log(this.state);
    };
  }

  render() {
    const {
      activeLoanView, loanCalcResult, leaseCalcResult, inputsCommonTradeIn,
      inputsCommonDownPayment, inputsCommonCreditScore, inputsCommonPostCode,
      inputsCommonMsrp, inputsLoanTerm, inputsLoanApr, inputsLeaseTerm,
      inputsLeaseMileage,
    } = this.state;
    const commonData = {
      inputsCommonTradeIn,
      inputsCommonDownPayment,
      inputsCommonCreditScore,
      inputsCommonPostCode,
      inputsCommonMsrp,
    };
    const loanData = { ...commonData, ...{ inputsLoanTerm, inputsLoanApr } };
    const leaseData = { ...commonData, ...{ inputsLeaseTerm, inputsLeaseMileage } };
    return (
      <Wrapper>
        <Calc>
          <Nav loan = {activeLoanView}
               cb={this.changeState}
               res={{ loan: loanCalcResult, lease: leaseCalcResult }}
          />
         {(activeLoanView) ? <Loan data={loanData}
                                cb={this.changeState}
                          /> : <Lease data={leaseData}
                                      cb={this.changeState}
                                />}
        </Calc>
        <InfoCard />
      </Wrapper>
    );
  }
}
