import React, { Component } from 'react';
import SearchComponent from './searchComponent';

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortType: '',
      userName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }
  handleSearch(){
    console.log("state",this.state)
  }

  render() {
    return (
      <SearchComponent onChange= {this.handleChange} onSearch= {this.handleSearch}/>
    );
  }
}

export default SearchContainer;