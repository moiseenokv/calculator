import React, { Component } from 'react';

export default class InputGroup extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = (ev) => {
      try {
        const { onChanged } = this.props;
        const { key } = this.props.data;
        const obj = {};
        obj[key] = ev.target.value;
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
    };
  }

  render() {
    const { title } = this.props;
    const { value, label } = this.props.data;
    const lbl = (label !== '') ? <label>{label}</label> : '';
    return (
      <div className="input-group">
        <p>{title}</p>
        <div>
            {lbl}
            <input type="number" value={value} onChange={this.onInputChange} onFocus={this.onFocusEvent} onBlur={this.onBlurEvent} />
        </div>
      </div>);
  }
}
