import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

import App from './components/app';
import Edit from './components/edit';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path='/edit/:id' component={Edit}/>
        <Route path='/' component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
