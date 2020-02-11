import React, { Component } from 'react';
import ButtonGroup from '../button-group';
import InputGroup from '../input-group';


export default class Lease extends Component {
  render() {
    const {
      inputsLoanTerm, inputsCommonCreditScore, inputsCommonPostCode,
      inputsCommonTradeIn, inputsCommonDownPayment, inputsLoanApr,
    } = this.props.data;
    const { cb } = this.props;
    return (
      <div className="calcof lease">
        <ButtonGroup title="Term (Months)" data={{ term: inputsLoanTerm, type: 'term' }} onClicked = {(st) => cb(st)}/>
        <InputGroup title="Trade-in Value" data={{ value: inputsCommonTradeIn, label: '$' }} />
        <InputGroup title="Down Payment" data={{ value: inputsCommonDownPayment, label: '$' }} />
        <ButtonGroup title="Approx. Credit Score" data={{ creditScore: inputsCommonCreditScore, type: 'score' }} onClicked = {(st) => cb(st)}/>
        <InputGroup title="Estimated APR" data={{ value: inputsLoanApr, label: '%' }} />
        <InputGroup title="Post code" data={{ value: inputsCommonPostCode, label: '' }} />
      </div>
    );
  }
}
