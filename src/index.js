import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/style.scss';

const rootContainer = document.createElement('div');
rootContainer.id = 'root';
document.body.append(rootContainer);

ReactDOM.render(<App/>, rootContainer);
