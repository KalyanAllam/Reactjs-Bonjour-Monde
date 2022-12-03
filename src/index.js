import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 


const root = ReactDOM.createRoot(document.getElementById('root'));
//Ajoutez
root.render(<h1>Bonjour Monde</h1>);
//Ajoutez
//commentaire
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);
//commentaire

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
