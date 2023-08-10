import React from 'react'
import './UserPortfolio.css'

export default function UserPortfolio() {

  const receivedToken = cookies.get('TOKEN');

  const decodedToken = jwtDecode(receivedToken);

  sessionStorage.setItem('userData', JSON.stringify(decodedToken));
  
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const userID = userData.id;

  const baseUrl = 'http://localhost:5000/api/user/';

  const configuration = {
    method: 'get',
    url: `${baseUrl}${userID}`
  };

  return (
    <div className='containerPortfolio'>
        <div className='portfolioBox'>
          Content.
        </div>
    </div>
  )
}
