import React from 'react'
import "./UserHome.css"
import Topbar from '../../components/topbar/topbar'
import Footer from '../../components/footer/footer'

export default function UserHome() {
  return (
    <div>
        <Topbar />
        <p>This is the home page for an authorized user.</p>
        <Footer />
    </div>
  )
}
