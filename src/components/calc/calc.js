/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

export default class Calc extends Component {
  render() {
    return (
      <div className = "calcs">
           {this.props.children}
      </div>
    );
  }
}
