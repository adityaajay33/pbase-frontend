import React from 'react'
import "./Register.css"
import Topbar from '../../components/topbar/topbar'
import Footer from '../../components/footer/footer'
import RegisterForm from '../../components/register-form/registerForm'

export default function Register() {
  return (
    <div>
        <Topbar />
        <RegisterForm />
        <Footer />
    
    </div>
  )
}
