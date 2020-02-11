/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import ButtonGroup from '../button-group';
import InputGroup from '../input-group';


export default class Loan extends Component {
  render() {
    const {
      inputsLoanTerm, inputsCommonCreditScore, inputsCommonPostCode,
      inputsCommonTradeIn, inputsCommonDownPayment, inputsLoanApr,
    } = this.props.data;
    const { cb } = this.props;
    return (
      <div className="calcof loan">
        <ButtonGroup title="Term (Months)" data={{ term: inputsLoanTerm, type: 'term' }} onClicked = {(st) => cb(st)}/>
        <InputGroup title="Trade-in Value" data={{ value: inputsCommonTradeIn, label: '$', key: 'inputsCommonTradeIn' }} onChanged = {(st) => cb(st)} />
        <InputGroup title="Down Payment" data={{ value: inputsCommonDownPayment, label: '$', key: 'inputsCommonDownPayment' }} onChanged = {(st) => cb(st)} />
        <ButtonGroup title="Approx. Credit Score" data={{ creditScore: inputsCommonCreditScore, type: 'score' }} onClicked = {(st) => cb(st)}/>
        <InputGroup title="Estimated APR" data={{ value: inputsLoanApr, label: '%', key: 'inputsLoanApr' }} onChanged = {(st) => cb(st)} />
        <InputGroup title="Post code" data={{ value: inputsCommonPostCode, label: '', key: 'inputsCommonPostCode' }} onChanged = {(st) => cb(st)} />
      </div>
    );
  }
}
