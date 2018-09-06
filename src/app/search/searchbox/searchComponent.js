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
                  <option value="score_dsc">Rank by Dsc</option>
                  <option value="name_asc" >Name by Asc</option>
                  <option value="name_dsc" >Name by Dsc</option>
                  <option value="score_asc">Rank by Asc</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Input onChange={(e) => props.onChange(e)} type="text" name="username" id="username" placeholder="Search User" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchContainer;