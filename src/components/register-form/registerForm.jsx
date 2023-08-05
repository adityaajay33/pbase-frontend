import React, {useState} from 'react'
import "./registerForm.css"
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RegisterForm() {

  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [institution, SetInstitution] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [register, SetRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    

    const configuration = {
      method:'post',
      url: 'http://localhost:5000/api/user/signup',
      data:{
        firstName,
        lastName,
        institution,
        email,
        password
      }}
  
      
  
      axios(configuration).then((result) => {
          SetRegister(true);
        })
        .catch((error) => {
          error = new Error();
        });

   }

  return (
    <div className="registerPage">
      <div className="boxWhite">
        <div className="titleReg">Register</div>

        <Form onSubmit={(e)=>handleSubmit(e)}>

        <Row>

            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => SetFirstName(e.target.value)}
                  placeholder="First Name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => SetLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </Form.Group>
            </Col>

          </Row>

          <Row>
            <Form.Group>
              <Form.Label>Institution</Form.Label>
              <Form.Control
                type="text"
                name="Institution"
                value={institution}
                onChange={(e) => SetInstitution(e.target.value)}
                placeholder="Institution"
              />
            </Form.Group>
          </Row>

          <Row>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="E-mail"
              />
            </Form.Group>

          </Row>

          <Row>
            {/* password */}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => SetPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>
          </Row>


          {/* submit button */}
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </Button>

          {register ? (
          <p className="text-success">You Are Registered Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Registered</p>
          )}
        </Form>
        

      </div>
    </div>
  )
}
