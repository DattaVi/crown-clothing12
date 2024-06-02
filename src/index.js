import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { store} from './store/store';
import {Provider} from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react';
import {Elements} from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/Stripe';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
    <Elements stripe={stripePromise}>
    <App />
    </Elements>
    </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
