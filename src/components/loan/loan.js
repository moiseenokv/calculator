/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

export default class Loan extends Component {
  render() {
    return (
      <div className="calcof loan">
               <div class="button-group">
                   <p>Term (Months)</p>
                   <div>
                        <button>36</button>
                        <button>48</button>
                        <button class="active">60</button>
                        <button>72</button>
                        <button>84</button>
                   </div>
               </div>

               <div class="input-group">
                <p>Trade-in Value</p>
                <div>
                    <label>$</label>
                    <input type="text" class="trade__in" value="0" />
                </div>
               </div>

               <div class="input-group">
                <p>Down Payment</p>
                <div>
                    <label>$</label>
                    <input type="text" class="trade__in" value="0" />
                </div>
               </div>

               <div class="button-group">
                <p>Term (Months)</p>
                <div>
                     <button>36</button>
                     <button>48</button>
                     <button class="active">60</button>
                     <button>72</button>
                     <button>84</button>
                </div>
                </div>

               <div class="input-group">
                <p>Estimated APR</p>
                <div>
                    <label>%</label>
                    <input type="text" class="trade__in" value="0" />
                </div>
               </div>

               <div class="input-group">
                <p>Post code</p>
                <div>
                    <input type="text" class="trade__in" value="0" />
                </div>
               </div>
           </div>
    );
  }
}
