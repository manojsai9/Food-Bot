// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// // Load Stripe with your publishable key
// const stripePromise = loadStripe("pk_test_51Qtx7t8ObxLGDwcdB8CwVScVZA8XOjdZBtHryeak8lXk1p6aZRAGgeKhIhwCEGCNv0lBuvJU98iOnnlITZS44fQ700NI5XPvj1");

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Elements stripe={stripePromise}>
//       <App />
//     </Elements>
//   </React.StrictMode>
// );

// // Performance monitoring
// reportWebVitals();


import React from "react";
import { createRoot } from "react-dom/client"; 
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = createRoot(document.getElementById("root")); 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);