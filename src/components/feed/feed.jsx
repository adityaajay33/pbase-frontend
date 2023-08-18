import React, { useEffect, useState } from 'react'
import "./feed.css"
import UserCards from '../card/Card'
import axios from "axios"


export default function Feed() {

  const [cards, setCards] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institution, setInstitution] = useState("");

  useEffect(() => {
     const configuration ={
      method: "get",
      url: 'http://localhost:5000/api/portfolios/'
     }

     axios(configuration).then((result) =>{
      setFirstName(result.data.userLink.firstName);
      setLastName(result.data.userLink.lastName);
      setInstitution(result.data.userLink.institution);
     }).catch((error) => {
      console.error("Error fetching user data:", error);
    });
  }, []);

  return (
    <div className='feedPortfolios'>
      {cards.map(card => (
        <UserCards firstName={firstName} lastName="Doe" institution="TMU" />
        ))}
      
    </div>
  )
}
