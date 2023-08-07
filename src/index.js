import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Card from './Card';
// import Form from './Form';
import Navbar from './Navbar';
import Abc from './Abc';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar Navbar="Navbar" Link="Link" Home="Home"></Navbar>
    <Abc Navbar="Naertyar" Link="Lintytyk" Home="Htrdyrtyrome"></Abc>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
