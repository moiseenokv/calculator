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
      views: {
        activeLoan: false,
        activeMenuLoan: false,
      },
      inputs: {
        common: {
          tradeIn: 0,
          downPayment: 0,
          creditScore: 0,
          postCode: 0,
          msrp: 0,
        },
        loan: {
          term: 0,
          apr: 0,
        },
        lease: {
          term: 0,
          mileage: 0,
        },
      },
      outputs: {},
      results: {
        loan: 10,
        lease: 10,
      },
    };

    this.changeState = (arr) => {
      arr.forEach((state) => {
        this.setState(state);
      });
    };
  }

  render() {
    const { activeLoan } = this.state.views;
    return (
      <Wrapper>
        <Calc>
          <Nav loan = {activeLoan} cb={this.changeState} res={this.state.results} />
          {(activeLoan) ? <Loan /> : <Lease />}
        </Calc>
        <InfoCard />
      </Wrapper>
    );
  }
}
