import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './static/js/App';
import registerServiceWorker from './static/js/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
