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
                <a href="../../pages/portfolios/portfolios.jsx" className='topbarLinks'><span className='portfoliosButton'>Portfolios</span></a>
                <a href='../../pages/register/Register.jsx' className='topbarLinks'><span className='register'>Register</span></a>
                <a href='../../pages/login/login.jsx' className='topbarLinks'><span className='login'>Login</span></a>
            </div>
        </div>
    </div> 


  )
}
