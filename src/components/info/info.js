import React, { Component } from 'react';

export default class InfoCard extends Component {
  render() {
    const { data } = this.props;
    const dataList = Object.keys(data).map((item) => {
      let clsName = 'item';
      if (item.toLocaleLowerCase() === 'msrp') {
        clsName += ' usd';
      } else if (item.toLocaleLowerCase() === 'loan' || item.toLocaleLowerCase() === 'lease') {
        clsName += ' usd__alt';
      } else if (item.toLocaleLowerCase() === 'rating') {
        clsName += ' star';
      }

      let lbl = '';
      if (item.toLocaleLowerCase() === 'loan' || item.toLocaleLowerCase() === 'lease') {
        lbl = `Est. ${item} Payment:`;
      } else {
        lbl = `${item}:`;
      }
      return (
        <li key = {`info-${item.toLocaleLowerCase()}`}>
          <p>{lbl}</p>
          <div className={clsName}>{data[item]}</div>
        </li>
      );
    });
    return (
      <div className="info__card">
         <ul>
            {dataList}
        </ul>
      </div>
    );
  }
}
