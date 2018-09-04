import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchContainer from './app/search/searchbox/searchContainer';


class App extends Component { 
  render() {
    return (
      <Container>
        <SearchContainer/>
      </Container>
    );
  }  
}

export default App;
