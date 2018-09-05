import React from 'react';
import { Card, Row, CardImg, Col, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import RepoTable from './repotable';

const headers = [];
const keys = ['name','language','open_issues','stargazers_count','forks','watcher'];

const ProfileCard = ({profile,onDetailPress}) => {
    const repoDetails = Array.isArray(profile.repos) 
                      ? <RepoTable data= {profile.repos} headers={headers} keys={keys} />
                      : null
    return (
        <Card style={{ marginTop: 10 }}>
            <CardBody>
                <Row style={{alignItems:'center'}}>
                    <Col sm="3">
                        <CardImg style={{height:100,width:100,borderRadius:'50%'}} src={profile.avatar_url}/>
                    </Col>
                    <Col sm="6">
                        <CardTitle>{profile.login}</CardTitle>
                        <CardSubtitle>Score : {profile.score}</CardSubtitle>
                    </Col>
                    <Col sm="3">
                        <Button outline color="primary" onClick={(e)=>onDetailPress(profile.login,profile.id)} >Details</Button>{' '}
                    </Col>
                </Row>
            </CardBody>
            {repoDetails}
        </Card>
    );
};

export default ProfileCard;