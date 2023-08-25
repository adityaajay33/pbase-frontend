import React, { useEffect, useState } from 'react';
import "./feed.css";
import UserCards from '../card/Card';
import axios from "axios";
import Cookies from "universal-cookie";
import jwtDecode from 'jwt-decode';

const cookies = new Cookies();

export default function Feed() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false); // New state

  console.log("Hello");

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/');
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUsersWithFileID = async () => {
    console.log("Starting updateUsersWithFileID");

    const updatedUsers = await Promise.all(users.map(async user => {
      console.log("Inside map for user", user.firstName);
      
      const linkUrl = `http://localhost:5000/api/user/userdata/${user._id}`;
      try {
        const response = await axios.get(linkUrl);
        const fileIDData = response.data.idList;
        const files = fileIDData[0];
        const fileID = "http://localhost:5000/api/portfolios/images/"+String(files);
        console.log("Got fileID", fileID);
        console.log(String(user.firstName)+" "+String(fileID));

        return {
          ...user,
          fileID: fileID
        };
      } catch (error) {
        console.log("Error fetching data for user", user.firstName, error);
        return user;
      }
    }));

    console.log("Finished updating users");
    console.log(initialized);
    setUsers(updatedUsers);
    console.log(users);
  };

  useEffect(() => {
    if (!initialized) {
      fetchUsers();
      setInitialized(true);
    } else {
      updateUsersWithFileID();
    }

    setLoading(false);
    
    const interval = setInterval(() => {
      updateUsersWithFileID();
    }, 30000);
  
    return () => clearInterval(interval);
  }, [initialized]);

  return (
    <div className='feedPortfolios'>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        users.map(user => (
          <UserCards className="cardUser" key={user._id} user={user} src={user.fileID}/>
        ))
      )}
    </div>
  );
}
