import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./userBackground.css";

export default function UserBackground({ userID }) {
  const [userData, setUserData] = useState('');

  const user = userID;
  const linkData = "http://localhost:5000/api/user/" + String(user);
  console.log(linkData);

  useEffect(() => {
    const fetchData = async () => { 
      
      try {
        const response = await axios.get(linkData);
        console.log(response.data);
        setUserData(response.data.userLink);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(); // Call the async function
  }, [linkData]);

  return (
    <div className="userBackgroundBorder">
        <h1 className="userNamePortfolio">{userData.firstName} {userData.lastName}</h1>
        <h1 className="userInstitutionPortfolio">{userData.institution}</h1>
    </div>
  );
}
