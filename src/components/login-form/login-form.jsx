import React from 'react'
import "./login-form.css"

export default function LoginForm() {
  return (
    <div className="loginPage">
      <div className="boxBlack">
        <div className="titleLog">Login</div>
        <div className="eMailLogin"><input type="email" placeholder='E-Mail' className="inputField" /></div>
        <div className="passwordLogin"><input type="password" placeholder="Password" className="inputField"></input></div>
        <div className="loginButton"><button class="button-9">Login</button> </div>
      </div>
    </div>
  )
}

