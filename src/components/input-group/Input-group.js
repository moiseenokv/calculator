import React, { Component } from 'react';

export default class InputGroup extends Component {
  constructor(props) {
    super(props);

    this.errorCodes = {
      '0x01': 'Input value is bigger than 1/4 of MSRP!',
      '0x02': 'Input value should be more than zero!',
    };

    this.onInputChange = (ev) => {
      try {
        const { onChanged } = this.props;
        const { key } = this.props.data;
        const obj = {};
        obj[key] = 1 * ev.target.value;
        onChanged(obj);
      } catch (error) {
        global.alert(`smth went wrong: ${error}`);
      }
    };

    this.onFocusEvent = ({ target }) => {
      const el = target;
      el.value = (el.value === 0 || el.value === '') ? '' : el.value;
    };

    this.onBlurEvent = ({ target }) => {
      const el = target;
      el.value = (el.value === 0 || el.value === '') ? 0 : el.value;
      try {
        const { onChanged } = this.props;
        const { key } = this.props.data;
        const obj = {};
        obj[key] = 1 * target.value;
        onChanged(obj);
      } catch (error) {
        global.alert(`smth went wrong: ${error}`);
      }
    };

    this.errorBlock = () => {
      const { code } = this.props.data;
      return (code !== '') ? <span className="validation"> {`Error: ${this.errorCodes[code]}`} </span> : '';
    };
  }

  render() {
    const { title } = this.props;
    const { value, label } = this.props.data;
    const lbl = (label !== '') ? <label>{label}</label> : '';
    return (
      <div className="input-group">
        <p>{title}<br />{this.errorBlock()}</p>
        <div>
            {lbl}
            <input type="number" value={value} onChange={this.onInputChange} onFocus={this.onFocusEvent} onBlur={this.onBlurEvent} />
        </div>
      </div>);
  }
}
