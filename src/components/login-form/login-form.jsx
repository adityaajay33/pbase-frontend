import React from 'react'
import "./login-form.css"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useState} from 'react'
import axios from "axios"
import Cookies from "universal-cookie"

const cookies = new Cookies();

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const configuration = {
      method:"post",
      url: 'http://localhost:5000/api/user/login',
      data:{
        email,
        password,
      },
    };

    axios(configuration).then((result)=>{setLogin(true); cookies.set("TOKEN", result.data.token, {path: "/",}); window.location.href = "/pages/userHome/UserHome.jsx"})
    .catch((error)=>{error = new Error();})

  }

  return (

    <div className="loginPage">
      <div className="boxBlack">
        <div className="titleLog">Login</div>
        <Form onSubmit={(e)=>handleSubmit(e)}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </Col>
          </Form.Group>
            
          <button variant="primary" type="submit" onClick={(e) => handleSubmit(e)} className="signupButton">
            Login
          </button>

          {login ? (
            <p className="text-success">You Are Logged in Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Logged in.</p>
          )}
        </Form>
      </div>
    </div>
  )
}

