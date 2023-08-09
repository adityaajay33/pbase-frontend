import React, { useEffect, useState }  from 'react'
import './UserProfile.css'
import '../../assets/placeholder_img.png'
import axios from "axios"
import Cookies from "universal-cookie"
import jwt from "jsonwebtoken"

const cookies = new Cookies();

export default function UserProfile() {

  const receivedToken = cookies.get('TOKEN');

  const decodedToken = jwt_decode(receivedToken);
  sessionStorage.setItem('userData', JSON.stringify(decodedToken));
  const userData = JSON.parse(sessionStorage.getItem('userData'));

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institution, setInstitution] = useState("");

  useEffect(() =>{

    const configuration = {
      method: 'get',
      url: 'http://localhost:5000/api/user/'
    }

    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setFirstName(result.data.firstName);
        setLastName(result.data.lastName);
        setInstitution(result.data.institution);
      })
      .catch((error) => {
        error = new Error();
      });

  }, [])

  return (
    <div className="containerProfile">
        <div className="profileBox">
            <div className="pictureUser">
              <div className="userAvatar">
              </div>
            </div>
            <div className="nameUser">
              {firstName}
            </div>
            <div className="backgroundUser">


            </div>
        </div>
    </div>
  )
}
