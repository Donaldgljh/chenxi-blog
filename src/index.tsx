import React from 'react';
import ReactDOM from 'react-dom';
import Layout from 'cxLayout/index';
import { BrowserRouter as Router } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
//import '../mock';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
