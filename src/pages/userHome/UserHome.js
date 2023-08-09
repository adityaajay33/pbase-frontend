import React from 'react'
import "./UserHome.css"
import Topbar from '../../components/topbar/topbar'
import Footer from '../../components/footer/footer'
import Dashboard from '../../components/dashboard/Dashboard'

export default function UserHome() {
  return (
    <div>
        <Topbar />
        <Dashboard />
        <Footer />
    </div>
  )
}
