import React, { Component } from 'react';
import SearchBox from './searchBox';
import { connect } from 'react-redux';
import onSearchUser from './action';
import UsersList from './userList';

class SearchContainer extends Component {
    state={userName:''}
    
    render() {
        const list =  <UsersList 
                        onDetailPress={this.handleDetailPress.bind(this)} 
                        userList={this.props.userList.list}/>
        return (
            <React.Fragment>
               <SearchBox
                onSubmit={this.handleSearch.bind(this)} 
                onUserNameChange={(e)=>this.setState({[e.target.name]:e.target.value})}/>
                {list}
            </React.Fragment>
        );
    }
 
    handleSearch() {
        this.props.onSearchUser(this.state.userName)
    }

    handleDetailPress(user) {
        console.log("fetch details for this user",user)
    }
}

const mapStateToProps = (state) => ({
    userList : state.userDetailReducer
});

const mapDispatchToProps = dispatch => ({
    onSearchUser: userName => dispatch(onSearchUser(userName))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer); 