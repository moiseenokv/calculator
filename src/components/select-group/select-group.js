import React, { Component } from 'react';

export default class SelectGroup extends Component {
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
      miles: [10000, 12000, 15000],
    };

    this.onInputChange = (ev) => {
      const { onChanged } = this.props;
      const { key } = this.props.data;
      const obj = {};
      obj[key] = 1 * ev.target.value;
      onChanged(obj);
    };

    this.constructOptions = () => {
      const { type } = this.props.data;
      const { terms, creditScoreVals, miles } = this.init;
      let out = '';
      if (type === 'term') {
        out = terms.map((item, index) => <option value={item} key={`sel-${type}-${index + 10}`}>{item}</option>);
      }

      if (type === 'mile') {
        out = miles.map((item, index) => <option value={item} key={`sel-${type}-${index + 10}`}>{item}</option>);
      }

      if (type === 'score') {
        out = creditScoreVals.map((item, index) => <option value={item.k} key={`sel-${type}-${index + 10}`}>{item.value}</option>);
      }
      return out;
    };
  }

  render() {
    const { value } = this.props.data;
    const { title } = this.props;
    return (
      <div className="select-group">
        <p>{title}</p>
        <div>
        <select value={value} onChange={this.onInputChange}>
            {this.constructOptions()}
          </select>
        </div>
      </div>
    );
  }
}
