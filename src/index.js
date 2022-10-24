import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import Store from "./store";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
const persistor = persistStore(Store); 

root.render(
  <Provider store={ Store }>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App/>
    {/* </PersistGate> */}
  </Provider>
);

