import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from './Header';
import Cakes from './Cakes';


const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
   <Header />
   <Cakes />
   
</React.StrictMode>
);
