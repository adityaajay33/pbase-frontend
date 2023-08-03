import React from 'react'
import "./login-form.css"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function LoginForm() {
  return (
    <div className="loginPage">
      <div className="boxBlack">
        <div className="titleLog">Login</div>
        <Form className="formReg">
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
              Login
            </button>
          </Form>
      </div>
    </div>
  )
}

