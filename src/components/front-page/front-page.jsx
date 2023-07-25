import React from 'react'
import "./front-page.css"

export default function Frontpage() {
  return (
    <div className="firstBox">
        <div className="title">PortfolioBase</div>
        <div className="boxFront">
            <div className="productTitle">PortfolioBase connects design students with agencies through portfolio sharing.</div>
            <div className="signupForm">
                <div className="firstName">
                    <input placeholder='  First Name' type="text" className="fieldSignup"/>
                </div>
                <div className="lastName">
                    <input placeholder='  Last Name' type="text" className="fieldSignup"/>
                </div>
                <div className="email">
                    <input placeholder='  E-Mail' type="email" className="fieldSignup"/>
                </div>
                <div className="signup">
                    <button type="button"  className="fieldSignup">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
