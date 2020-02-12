import React, { Component } from 'react';
import InputGroup from '../input-group';
import SelectGroup from '../select-group';


export default class Lease extends Component {
  render() {
    const {
      inputsLeaseTerm, inputsCommonCreditScore, inputsCommonPostCode,
      inputsCommonTradeIn, inputsCommonDownPayment, inputsLeaseMileage,
      tradeInCode, paymentCode,
    } = this.props.data;
    const { cb } = this.props;
    return (
      <div className="calcof lease">
        <SelectGroup title="Term (Months)" data={ { value: inputsLeaseTerm, type: 'term', key: 'inputsLeaseTerm' }} onChanged = {(st) => cb(st)} />
        <InputGroup title="Trade-in Value" data={{
          value: inputsCommonTradeIn, label: '$', key: 'inputsCommonTradeIn', code: tradeInCode,
        } } onChanged = {(st) => cb(st)} />
        <InputGroup title="Down Payment" data={{
          value: inputsCommonDownPayment, label: '$', key: 'inputsCommonDownPayment', code: paymentCode,
        }} onChanged = {(st) => cb(st)} />
        <SelectGroup title="Approx. Credit Score" data={ { value: inputsCommonCreditScore, type: 'score', key: 'inputsCommonCreditScore' }} onChanged = {(st) => cb(st)} />
        <SelectGroup title="Mileage" data={ { value: inputsLeaseMileage, type: 'mile', key: 'inputsLeaseMileage' }} onChanged = {(st) => cb(st)} />
        <InputGroup title="Post code" data={{
          value: inputsCommonPostCode, label: '', key: 'inputsCommonPostCode', code: '',
        }} onChanged = {(st) => cb(st)} />
      </div>
    );
  }
}
