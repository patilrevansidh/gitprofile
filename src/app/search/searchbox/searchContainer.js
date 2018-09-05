import React, { Component } from 'react';
import SearchComponent from './searchComponent';

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortType: 'name',
      userName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    return (
      <SearchComponent onChange= {this.handleChange} onSearch={()=>this.props.onSearch(this.state)}/>
    );
  }
}

export default SearchContainer;