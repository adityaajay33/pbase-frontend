import React from 'react'
import "./Card.css"
import "../../assets/placeholder_img.png"

export default function UserCards({firstName, lastName, institution}) {
  return (
    <div className="outerDiv">
        <img src="../../assets/placeholder_img.png" className="pictureUser" />
        <div className="userName">
            {firstName} {lastName}
        </div>
        <div className="userUniversity">
            {institution}
        </div>
    </div>
  )
}
