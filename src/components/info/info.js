/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

export default class InfoCard extends Component {
  render() {
    return (
      <div className="info__card">
         <ul>
            <li>
                <p>MSRP:</p>
                <div class="usd">200000,34</div>
            </li>
            <li>
                <p>Vehicle:</p>
                <div>Audi A6</div>
            </li>
            <li>
                <p>Est. <span>Loan</span> Payment</p>
                <div class="usd__alt">845,23</div>
            </li>
            <li>
                <p>Taxes:</p>
                <div>(22, 22, 11, 11, 66)</div>
            </li>
            <li>
                <p>Dealer:</p>
                <div>Some Dealer Ltd.</div>
            </li>
            <li>
                <p>Phone:</p>
                <div>+737618341</div>
            </li>
            <li>
                <p>Rating:</p>
                <div class="star">5</div>
            </li>
        </ul>
      </div>
    );
  }
}
