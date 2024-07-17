import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Kennel} from "./components/Kennel.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Kennel />
  </React.StrictMode>
);