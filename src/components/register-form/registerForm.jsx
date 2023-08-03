import React from 'react'
import "./registerForm.css"
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function RegisterForm() {
  return (
    <div className="registerPage">
      <div className="boxWhite">
        <div className="titleReg">Register</div>
        <Form className="formReg">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Col>
            
            </Row>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Institution</Form.Label>
                <Form.Control type="text" placeholder="Institution" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter E-mail" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
          <button variant="primary" type="submit" className="signupButton">
            Sign Up
          </button>
        </Form>
      </div>
    </div>
  )
}
