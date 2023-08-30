import React from 'react'
import "./topbar.css"
import Cookies from "universal-cookie"
import jwtDecode from 'jwt-decode';

const cookies = new Cookies();

export default function Topbar() {

  const logout = () => {

    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  }


  let receivedToken, decodedToken, userData, user;

  try{
    receivedToken = cookies.get('TOKEN');
    decodedToken = jwtDecode(receivedToken);

    sessionStorage.setItem('userData', JSON.stringify(decodedToken));
    userData = JSON.parse(sessionStorage.getItem('userData'));
    user = userData.userId;
  }
  catch(err){
    console.log("User is not logged in.");
  }
    
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <a href="../../" className="topbarLinks"><span className="logo">
                PB
            </span></a>
        </div>
        <div className="topbarCenter">
            <input placeholder='  Search Portfolios and Users...' className='searchBar'/>
        </div>
        <div className="topbarRight">
            {receivedToken ? 
            (
            <div className="topbarLinks">
                <a href="../../pages/portfolios/portfolios.jsx" className='topbarLinks'><span className='portfoliosButton'>Portfolios</span></a>
                <a className='topbarLinks' onClick={()=> logout()}><span className='logout'>Logout</span></a>
            </div>)
            
            :
            (<div className="topbarLinks">
                <a href="../../pages/portfolios/portfolios.jsx" className='topbarLinks'><span className='portfoliosButton'>Portfolios</span></a>
                <a href='../../pages/register/Register.jsx' className='topbarLinks'><span className='register'>Register</span></a>
                <a href='../../pages/login/login.jsx' className='topbarLinks'><span className='login'>Login</span></a>
            </div>)
            }
        </div>
    </div> 


  )
}
