import React from 'react'
import "./Card.css"
import GreySquare from "../../assets/GreySquare.jpg"

export default function UserCards({ user }) {
  const linkData = "../../pages/viewPortfolio/" + String(user._id);
  console.log(linkData);

  return (
    <div className="outerDiv">
        <img src={user.fileID} className="pictureUser" alt="User Card" />
        <div className="userName">
            {user.firstName} {user.lastName}
        </div>
        <div className="userUniversity">
            {user.institution}
        </div>
        <div className="open1"><button className="button-10"><a href={linkData}>Open</a></button></div>
    </div>
  )
}
