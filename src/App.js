import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchContainer from './app/search/searchbox/searchContainer';
import ProfileListContainer from './app/search/profileList/profileListContainer';
import searchService from './app/search/service';

class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      profiles : [],
      loadingProfiles : undefined
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  async handleSearch(body) {
    try {
      this.setState({loadingProfiles: true});
      const response = await searchService.searchUserName(body.userName)
      this.setState({loadingProfiles: false, profiles: response.items});
    } catch (error) {
      this.setState({loadingProfiles: false});
    }
  }

  render() {
    return (
      <Container>
        <SearchContainer onSearch={this.handleSearch}/>
        <ProfileListContainer 
          showLoader= {this.state.loadingProfiles} 
          profiles= {this.state.profiles} />
      </Container>
    );
  }  
}

export default App;
