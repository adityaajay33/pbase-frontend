import React, { useEffect, useState } from 'react';
import "./feed.css";
import UserCards from '../card/Card';
import axios from "axios";

export default function Feed({ filteredLabels }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("Hello");

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/');
      setUsers(response.data.users);
      console.log("ATP");
    } catch (error) {
      console.log(error);
    }
  };

  const updateUsersWithFileID = async () => {
    console.log("Starting updateUsersWithFileID");
  
    const updatedUsers = [];
  
    for (const user of users) {
      console.log("Inside map for user", user.firstName);
  
      const linkUrl = `http://localhost:5000/api/user/userdata/${user._id}`;


      try {
        const response = await axios.get(linkUrl);
        const fileIDData = response.data.idList;
        const files = fileIDData[0];
        const fileID = "http://localhost:5000/api/portfolios/images/" + String(files);
        console.log("Got fileID", fileID);

        console.log(String(user.firstName) + " " + String(fileID));
  
        updatedUsers.push({
          ...user,
          fileID: fileID
        });
      } catch (error) {
        console.log("Error fetching data for user", user.firstName, error);
        updatedUsers.push(user);
      }
    }

    const filteredContent = users.filter((user) =>
      filteredLabels.includes(user.program)
    );

    console.log("Finished updating users");
    setUsers(updatedUsers);
    console.log(updatedUsers);
  };

  useEffect(() => {
    fetchUsers();
    updateUsersWithFileID();
    console.log(users);
    setLoading(false);
  }, []);

  return (
    <div className='feedPortfolios'>
    {loading ? (
      <p>Loading...</p>
    ) : (
      users.map(user => (
        <UserCards className="cardUser" key={user._id} user={user} src={user.fileID}/>)
      )
    )
    }
  </div>
  );
}