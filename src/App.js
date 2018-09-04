import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchContainer from './app/search/searchbox/searchContainer';
import ProfileListContainer from './app/search/profileList/profileListContainer';


class App extends Component { 
  render() {
    return (
      <Container>
        <SearchContainer/>
        <ProfileListContainer/>
      </Container>
    );
  }  
}

export default App;
