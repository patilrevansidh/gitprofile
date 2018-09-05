import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchComponent from './app/search/searchbox/searchComponent';
import ProfileListContainer from './app/search/profileList/profileListContainer';
import searchService from './app/search/service';
import ReactPaginate  from 'react-paginate';
import { CONST_VALUE } from './common/constatns/stringConstants';

class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      profiles : [],
      loadingProfiles : undefined,
      page: 1,
      total_count:0,
      username:'',
      sortType:''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)    
  }

  async handleSearch() {    
    try {
      this.setState({loadingProfiles: true});
      const body ={
        'q':this.state.username,
        'page':this.state.page,
        'per_page': CONST_VALUE.COUNT_PER_PAGE
      }
      const response = await searchService.searchUserName(body)
      this.setState({loadingProfiles: false, profiles: response.items, total_count: response.total_count});
    } catch (error) {
      this.setState({loadingProfiles: false});
    }
  }
  
  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    const pagination = this.state.profiles.length > 0
                     ? <a><ReactPaginate 
                          style={{cursor:'pointer'}}
                          breakLabel={<a href="">...</a>}
                          breakClassName={"break-me"}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          onPageChange={(e)=>this.setState({ page: e.selected },()=>this.handleSearch())} 
                          pageCount={this.state.total_count/CONST_VALUE.COUNT_PER_PAGE} 
                          pageRangeDisplayed={2} 
                          marginPagesDisplayed={2}/></a>
                     : '';
    return (
      <Container>
        <SearchComponent onChange= {this.handleChange} onSearch={this.handleSearch}/>
        <ProfileListContainer 
          showLoader= {this.state.loadingProfiles} 
          profiles= {this.state.profiles} />
          {pagination}
      </Container>
    );
  }  
}

export default App;
