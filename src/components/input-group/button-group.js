import React, { Component } from 'react';

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.init = {
      terms: [12, 24, 36, 48, 72, 84],
      creditScoreVals: [
        { value: 'less-639', k: 1.2 },
        { value: '640-699', k: 1.05 },
        { value: '700-749', k: 1.0 },
        { value: '750-more', k: 0.95 },
      ],
    };
    this.onButtonClickTerm = (ev) => {
      const { onClicked } = this.props;
      const currValue = 1 * ev.currentTarget.innerText;
      onClicked({ inputsLoanTerm: currValue });
    };

    this.constructTerm = () => {
      const { term } = this.props.data;
      const { terms } = this.init;
      return terms.map((item) => ((term === item) ? <button onClick={this.onButtonClickTerm} className="active">{item}</button> : <button onClick={this.onButtonClickTerm}>{item}</button>));
    };

    this.onButtonClickCreditScore = (ev) => {
      const { onClicked } = this.props;
      const currValue = 1 * ev.currentTarget.getAttribute('data-koef');
      global.console.log(currValue);
      onClicked({ inputsCommonCreditScore: currValue });
    };

    this.constructCreditScore = () => {
      const { creditScore } = this.props.data;
      const { creditScoreVals } = this.init;
      global.console.log(this.props.data);
      return creditScoreVals.map((item) => ((creditScore === item.k) ? <button onClick={this.onButtonClickCreditScore} data-koef={item.k} className="active">{item.value}</button> : <button onClick={this.onButtonClickCreditScore} data-koef={item.k}>{item.value}</button>));
    };
  }

  render() {
    const { type } = this.props.data;
    const { title } = this.props;
    const buttonBody = (type === 'term') ? this.constructTerm() : this.constructCreditScore();
    return (
      <div className="button-group">
        <p>{title}</p>
        <div>
           {buttonBody}
        </div>
      </div>
    );
  }
}
