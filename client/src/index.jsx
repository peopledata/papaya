import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

//add routes
import Home from './routes/wealthDAO';
import Exequoery from './routes/dataPortable';
import Execopy from './routes/dataCheck';


//css
import './index.css';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        
        
      </Route>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root'),
);
