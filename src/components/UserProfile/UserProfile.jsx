import React, { useEffect, useState }  from 'react'
import './UserProfile.css'
import '../../assets/placeholder_img.png'
import axios from "axios"
import Cookies from "universal-cookie"
import jwtDecode from "jwt-decode"

const cookies = new Cookies();

export default function UserProfile() {

  const receivedToken = cookies.get('TOKEN');

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institution, setInstitution] = useState("");

  useEffect(() => {

    
    const decodedToken = jwtDecode(receivedToken);

    sessionStorage.setItem('userData', JSON.stringify(decodedToken));
    
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userID = userData.userId;

    const baseUrl = 'http://localhost:5000/api/user/'+String(userID);

    const configuration = {
      method: 'get',
      url: baseUrl
    };

    axios(configuration)
      .then((result) => {
        setFirstName(result.data.userLink.firstName);
        setLastName(result.data.userLink.lastName);
        setInstitution(result.data.userLink.institution);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="containerProfile">
        <div className="profileBox">
            <div className="pictureUser">
              <div className="userAvatar">
              </div>
            </div>
            <div className="nameUser">
              {firstName} {lastName}
            </div>
            <div className="backgroundUser">
              {institution}
            </div>
        </div>
    </div>
  )
}
