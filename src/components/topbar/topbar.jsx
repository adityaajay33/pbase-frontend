import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">
                PB
            </span>
        </div>
        <div className="topbarCenter">
                <input placeholder='  Search Portfolios and Users...' className='searchBar'/>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='register'>Register</span>
                <span className='login'>Login</span>
            </div>
        </div>
    </div> 


  )
}
