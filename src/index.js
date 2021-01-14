import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import App from './App';
import rootReducer from './modules';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
  rootReducer,
  // logger 사용 시, logger 가 마지막에 와야 한다.
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
); // 여러개의 미들웨어 적용 가능

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);