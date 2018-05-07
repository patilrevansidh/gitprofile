import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import ReactPaginate from 'react-paginate';


const UserList = (props) => {
    if(props.userList && Array.isArray(props.userList)) {
        const userList = props.userList.map((m)=>{
            return <User user={m} onDetailPress={props.onDetailPress}/>
        })
        return <React.Fragment> 
                {userList}
               </React.Fragment>
    }
    return (
        <div>   
            Some thing went wrong
        </div>
    );
};

const User = (props) => {
    return (
        <Card>
            <img src={props.user.avatar_url} alt="User Avatar" height="100px" width="100px"/>
            <CardBody>
                <CardTitle>{props.user.login}</CardTitle>
                <CardText>{props.user.url}</CardText>
                <Button onClick={(e)=>{e.preventDefault();props.onDetailPress(props.user.login)}}>Details</Button>
            </CardBody>
        </Card>    
    )
}

export default UserList;