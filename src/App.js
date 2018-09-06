import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchComponent from './app/search/searchbox/searchComponent';
import ProfileListContainer from './app/search/profileList/profileListContainer';
import searchService from './app/search/service';
import { CONST_VALUE } from './common/constatns/stringConstants';
import _ from 'lodash';
import ReactstrapPagination from './app/search/profileList/pagination';

class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      profiles : [],
      loadingProfiles : undefined,
      page: 1,
      total_count:0,
      username:'',
      sortType:'score_dsc',
      error : undefined
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDetailPress = this.handleDetailPress.bind(this);
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
      if(response.total_count !== undefined) {
        this.setState({loadingProfiles: false, profiles: response.items, total_count: response.total_count, error: false});
      }else {
        this.setState({ error: response.message });
      }
    } catch (error) {
      this.setState({loadingProfiles: false});
    }
  }
  
  handleChange(e) {
    if(e.target.name === "username") {
      this.setState({[e.target.name]:e.target.value},()=>this.handleSearch());
    }else {
          let profileList = []
         if(e.target.value === 'name_dsc') {
            profileList = _.orderBy(this.state.profiles,['login'],['desc'])
          }else if(e.target.value === 'score_dsc'){
              profileList= _.orderBy(this.state.profiles,['score'],['desc'])
          }else if(e.target.value === 'score_asc') {
              profileList= _.orderBy(this.state.profiles,['score'],['asc'])
          }else if(e.target.value === 'name_asc'){
              profileList = _.orderBy(this.state.profiles,['login'],['asc']);
          }
      this.setState({ profiles: profileList });
    }
  }

  async handleDetailPress(username) {
    try {
      const profiles = this.state.profiles
      const index = _.findIndex(this.state.profiles, function(p) { return p.login === username })
      let profile = profiles[index]
      console.log("profile",index)
      if(profile.repos) {
          delete profile.repos
          profiles[index] = profile
      }else {
        let repos = await searchService.fetchRepoDetails(username)
        repos = repos.map((m)=>{
          const obj = {
            'name' : m.name,
            'language' : m.language,
            'open_issues' : m.open_issues,
            'stargazers_count' : m.stargazers_count,
            'forks' : m.forks,
            'watchers' : m.watchers_count,
          }
          return obj
        });
        profile = {...profile,repos}
        profiles[index] = profile
      }
      this.setState({profiles});      
    } catch (error) {
      console.log("errors",error)
    }
  }

  render() {
    const pagination = this.state.total_count/CONST_VALUE.COUNT_PER_PAGE >= 2  ? <ReactstrapPagination                      
                          currentPage={this.state.page}
                          onPageChange= {(page)=>this.setState({ page:page },()=>this.handleSearch())} 
                          pageCount= {Math.ceil(this.state.total_count/CONST_VALUE.COUNT_PER_PAGE)} 
                          />
                     : '';
    const profileList = this.state.error === false 
                      ?  <ProfileListContainer 
                        onDetailPress= {this.handleDetailPress}
                        showLoader= {this.state.loadingProfiles} 
                        profiles= {this.state.profiles} />
                      : <p> {this.state.error} </p>
    return (
      <Container>
        <SearchComponent onChange= {this.handleChange} onSearch={this.handleSearch}/>
          {profileList}
          {pagination}
      </Container>
    );
  }  
}

export default App;
// name_asc
// name_dsc
// score_asc
// score_dsc