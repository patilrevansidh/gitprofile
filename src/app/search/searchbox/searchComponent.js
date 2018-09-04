import React from 'react';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { COLOR } from '../../../common/constatns/stringConstants';

const SearchContainer = (props) => {
  return (
    <Row>
      <Col style={{ height: '8%', backgroundColor: COLOR.PRIMARY_BLUE }}>
        <Form onSubmit={(e) => { e.preventDefault(); props.onSearch() }}>
          <Row style={{ padding: '0.5%' }}>
            <Col sm="6">
              <FormGroup>
                <Input onChange={(e) => props.onChange(e)} type="select" name="sortType" id="exampleSelect">
                  <option>Name</option>
                  <option>Rank</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Input onChange={(e) => props.onChange(e)} type="text" name="userName" id="username" placeholder="Search User" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchContainer;