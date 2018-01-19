import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Relevant persons" />, document.getElementById('root'));
registerServiceWorker();
