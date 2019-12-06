import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const App = props => {
  return (
      <BrowserRouter>
        <Routes {...props} />
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
