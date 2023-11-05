import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5cG6IMCIRgcszU__GOVhmcU9gniNbc9U",
  authDomain: "e-commerce-entregafinal.firebaseapp.com",
  projectId: "e-commerce-entregafinal",
  storageBucket: "e-commerce-entregafinal.appspot.com",
  messagingSenderId: "148359215152",
  appId: "1:148359215152:web:1e5c0adebd16206e8bd5f5"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"crossorigin></script>;
<script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"crossorigin></script>;
<script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"crossorigin></script>;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
