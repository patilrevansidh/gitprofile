import React from 'react';
import { Card, Row, CardImg, Col, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import { COLOR } from '../../../common/constatns/stringConstants';

const profile = {
    "login": "patilrevansidh",
    "id": 11453641,
    "node_id": "MDQ6VXNlcjExNDUzNjQx",
    "avatar_url": "https://avatars1.githubusercontent.com/u/11453641?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/patilrevansidh",
    "html_url": "https://github.com/patilrevansidh",
    "followers_url": "https://api.github.com/users/patilrevansidh/followers",
    "following_url": "https://api.github.com/users/patilrevansidh/following{/other_user}",
    "gists_url": "https://api.github.com/users/patilrevansidh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/patilrevansidh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/patilrevansidh/subscriptions",
    "organizations_url": "https://api.github.com/users/patilrevansidh/orgs",
    "repos_url": "https://api.github.com/users/patilrevansidh/repos",
    "events_url": "https://api.github.com/users/patilrevansidh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/patilrevansidh/received_events",
    "type": "User",
    "site_admin": false,
    "score": 42.3586
}

const ProfileCard = ({profile}) => {
    // const profile = props.profile
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
                        <Button outline color="primary">Details</Button>{' '}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default ProfileCard;