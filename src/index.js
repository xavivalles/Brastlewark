
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from "./containers/App/App";
import serviceWorker from "./serviceWorker";
import { reducer } from "./reducers/redux";
import { watcherSaga } from "./sagas/sagas";
import "./index.css";

const persistConfig = {
  key: 'root',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, reducer);

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  pReducer,
  compose(applyMiddleware(sagaMiddleware), devTools)
);

const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider >,
  document.getElementById("root")
);
serviceWorker();