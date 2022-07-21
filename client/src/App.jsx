import { Component } from 'react';
import { ContentWrapper, Header , Wrapper } from './components';

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
};

export default App;