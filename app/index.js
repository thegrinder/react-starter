import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import App from './containers/App';

Modal.setAppElement('#app');

ReactDOM.render(<App />, document.getElementById('app'));
