import { Component } from 'react';
import { ContentWrapper, Header , Wrapper } from './components';

import './App.css';


class App extends Component {
  render() {
    return (
    <div>
      <div className="dark-light">
        <svg viewBox="0 0 24 24" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
      </div>

      <Header />
      <Wrapper>
        <div className='content-wrapper'>
          <ContentWrapper />
        </div>
        
      </Wrapper>
       
            
    </div>  
    
  )
 }
};

export default App;