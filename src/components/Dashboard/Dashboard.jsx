import React from 'react'
import UserProfile from '../UserProfile/UserProfile'
import UserPortfolio from '../UserPortfolio/UserPortfolio'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboardComponent">
        <UserProfile />
        <UserPortfolio />
    </div>
  )
}