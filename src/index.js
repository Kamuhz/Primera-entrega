import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAemtKlSjyi2kuBtDo48lX-eWIcUkqPksw",
  authDomain: "proyecto-final-8dc53.firebaseapp.com",
  projectId: "proyecto-final-8dc53",
  storageBucket: "proyecto-final-8dc53.appspot.com",
  messagingSenderId: "509506128170",
  appId: "1:509506128170:web:434f9231fecfc6b0de3653"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


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
