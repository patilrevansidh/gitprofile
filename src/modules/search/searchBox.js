import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const searchBox = (props) => {
    return (
        <Form onSubmit={(e)=>{e.preventDefault();props.onSubmit()}}>
            <FormGroup>
                <Label>User Name</Label>
                <Input name="userName" 
                        id="exampleEmail" placeholder="User name" 
                        onChange={(e)=>props.onUserNameChange(e)} />
            </FormGroup>
        </Form>
    );
};

export default searchBox;