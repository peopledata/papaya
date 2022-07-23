import { Component } from 'react';
import { BrowserRouter, Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { ContentWrapper, Header , Wrapper, Footer } from './components';

import './App.css';



class App extends Component {


  render() {
    return (
    <div>
      <Header />
      <Wrapper>
        
          <ContentWrapper />
        
      </Wrapper>
    
              
    </div>  
  
  )
 }

}


export default App;