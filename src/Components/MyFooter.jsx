import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class MyFooter extends Component {
  render() {
    return (
      <footer className="bg-light mt-5">
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>&copy; 2023 Your Company. All rights reserved.</p>
              <div>
                <h1>Welcome to my website</h1>
               <p>This is the home page</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );

  }
}
