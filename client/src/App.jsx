import { Component } from 'react';
import { BrowserRouter, Route, Link, Outlet } from 'react-router-dom';
import { ContentWrapper, Header , Wrapper, Footer } from './components';

import './App.css';

// Routes
import { ToolBox } from './components/ToolBox';


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