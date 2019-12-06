import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';

import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const App = props => {
  return (
      <HashRouter>
        <Routes {...props} />
      </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
