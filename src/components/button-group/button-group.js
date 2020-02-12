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
      const { term, type } = this.props.data;
      const { terms } = this.init;
      return terms.map((item, index) => ((term === item)
        ? <button key={`but-${type}-${index + 10}`} onClick={this.onButtonClickTerm} onChange={this.onButtonClickTerm} className="active">{item}</button>
        : <button key={`but-${type}-${index + 10}`} onClick={this.onButtonClickTerm} onChange={this.onButtonClickTerm}>{item}</button>));
    };

    this.onButtonClickCreditScore = (ev) => {
      const { onClicked } = this.props;
      const currValue = 1 * ev.currentTarget.getAttribute('data-koef');
      onClicked({ inputsCommonCreditScore: currValue });
    };

    this.constructCreditScore = () => {
      const { creditScore, type } = this.props.data;
      const { creditScoreVals } = this.init;
      return creditScoreVals.map((item, index) => ((creditScore === item.k)
        ? <button key={`but-${type}-${index + 10}`} onClick={this.onButtonClickCreditScore} onChange={this.onButtonClickCreditScore} data-koef={item.k} className="active">{item.value}</button>
        : <button key={`but-${type}-${index + 10}`} onClick={this.onButtonClickCreditScore} onChange={this.onButtonClickCreditScore} data-koef={item.k}>{item.value}</button>));
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
