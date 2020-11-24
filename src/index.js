import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import './index.css';
import reducer from "./reducers";

import EventsIndex from './component/events_index';
import reportWebVitals from './reportWebVitals';

const store = createStore( reducer );

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>
  , document.getElementById("root")
);

reportWebVitals();
