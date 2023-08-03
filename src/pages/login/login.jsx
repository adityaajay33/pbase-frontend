import React from 'react'
import "./login.css"
import Topbar from '../../components/topbar/topbar'
import Footer from '../../components/footer/footer'
import LoginForm from '../../components/login-form/login-form'

export default function Login() {
  return (
    <div>
        <Topbar />
        <LoginForm />
        <Footer />
    
    </div>
  )
}
