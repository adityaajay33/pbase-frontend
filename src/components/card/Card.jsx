import React from 'react'
import "./Card.css"
import GreySquare from "../../assets/GreySquare.jpg"

export default function UserCards({ user }) {
  return (
    <div className="outerDiv">
        <img src={GreySquare} className="pictureUser" alt="User Card" />
        <div className="userName">
            {user.firstName} {user.lastName}
        </div>
        <div className="userUniversity">
            {user.institution}
        </div>
    </div>
  )
}
