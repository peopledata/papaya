import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ContentWrapper, Header , Wrapper, Footer } from './components';

import './App.css';

export default function App()  {

    return (
      <div>
        <Header />
        <Wrapper />
        
        
        <Outlet />
              
      </div>  
  
  );
 }
