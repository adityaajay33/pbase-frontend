import React from 'react'
import "./registerForm.css"

export default function RegisterForm() {
  return (
    <div className="registerPage">
      <div className="boxWhite">
        <div className="titleReg">Register</div>
        <div className="firstNameReg"><input type="text" placeholder='First Name' className="inputField" /></div>
        <div className="lastNameReg"><input type="text" placeholder='Last Name' className="inputField" /></div>
        <div className="eMail"><input type="email" placeholder='E-Mail' className="inputField" /></div>
        <div className="institution"><input type="institution" placeholder="Institution" className="inputField" /></div>
        <div className="signupButton"><button class="button-11" >Sign Up</button> </div>
      </div>
    </div>
  )
}
