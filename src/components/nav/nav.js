import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.initData = ['Loan', 'Lease'];

    this.menuItemClick = ({ currentTarget }) => {
      global.console.dir(currentTarget.classList.contains('lease'));
      const { loan, cb } = this.props;

      if ((loan && currentTarget.classList.contains('lease')) || (!loan && currentTarget.classList.contains('loan'))) {
        cb([{
          views: {
            activeLoan: !loan,
            activeMenuLoan: !loan,
          },
        }]);
      }
    };
  }

  render() {
    const { loan, res } = this.props;
    const menuItems = this.initData.map((item) => {
      let className = `menu__item ${item.toLocaleLowerCase()}`;
      if (loan && item === 'Loan') {
        className += ' active';
      }
      if (!loan && item === 'Lease') {
        className += ' active';
      }

      return (
        <li className ={className}
            onClick = { this.menuItemClick }>
          <span>Est. {item}</span>
          <div>{res[item.toLocaleLowerCase()]}</div>
        </li>
      );
    });

    return (
      <nav>
        <ul>
           {menuItems}
        </ul>
    </nav>
    );
  }
}
