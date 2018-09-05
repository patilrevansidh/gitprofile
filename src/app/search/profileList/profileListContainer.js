import React, { Component } from 'react';
import ProfileCard from './profileCard';
import { CardTitle, Row, Col } from 'reactstrap';
import { COLOR } from '../../../common/constatns/stringConstants'
// showLoader
// profiles
const  ProfileList =(props)=> {
    const list = props.showLoader === undefined ? null 
                : props.showLoader === true 
                ? <p> Loading profiles.. </p> 
                : Array.isArray(props.profiles) && props.profiles.length > 0 
                    ? props.profiles.map(m=><ProfileCard onDetailPress={props.onDetailPress} key={m.id} profile={m}/>)  
                    : <CardTitle> No user found </CardTitle>
    return (
        <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                {list}
            </Col>
        </Row>
    );
}



export default ProfileList;