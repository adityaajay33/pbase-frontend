import React, { useEffect, useState } from 'react'
import "./feed.css"
import UserCards from '../card/Card'
import axios from "axios"


export default function Feed() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/');
        setUsers(response.data.users);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    console.log(users);
    fetchUsers();
  }, [users]);

  return (
    <div className='feedPortfolios'>
      {loading ? (
        <p>Loading...</p> 
      ) : (
        users.map(user => (
          <UserCards className="cardUser" key={user._id} user={user} />
        ))
      )}
    </div>
  )
}