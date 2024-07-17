import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Kennels} from "./components/Kennels.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Kennels />
  </React.StrictMode>
);