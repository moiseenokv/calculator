import React, { Component } from 'react';

export default class InputGroup extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = (ev) => {
      const { onChanged } = this.props;
      const { key } = this.props.data;
      const obj = {};
      obj[key] = ev.target.value;
      onChanged(obj);
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
            <input type="text" value={value} onChange={this.onInputChange} />
        </div>
      </div>);
  }
}
