/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

export default class InputGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    const { value, label } = this.props.data;
    const lbl = (label !== '') ? <label>{label}</label> : '';
    return (
      <div class="input-group">
        <p>{title}</p>
        <div>
            {lbl}
            <input type="text" value={value} />
        </div>
      </div>);
  }
}
