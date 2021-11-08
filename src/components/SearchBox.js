import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const SearchBox = ({loading, searchInput, handleSearchChange, handleSubmit }) => {
    
    return (
      <Form onSubmit={handleSubmit}>

          <Col>
            <Form.Control
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchChange}
            />
          </Col>
 
      </Form>
    );
  };
export default SearchBox;