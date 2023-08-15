import React, { useState } from 'react';
import './UserPortfolio.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';

const cookies = new Cookies();

export default function UserPortfolio() {
  const receivedToken = cookies.get('TOKEN');
  const decodedToken = jwtDecode(receivedToken);

  sessionStorage.setItem('userData', JSON.stringify(decodedToken));
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const user = userData.userId;

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('user', user);
      formData.append('file', file);
      for (let obj of formData) {
        console.log(obj);
      }

      try {
        const response = await axios.post(
          'http://localhost:5000/api/portfolios/add',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }

        );

        const linkRes = response.data;
        const portfolioID = linkRes.fileId;
        console.log(portfolioID);

        const linkUrl = 'http://localhost:5000/api/portfolios/images/'+String(portfolioID);

        console.log(linkUrl);

        const imageDisplay = document.getElementById('imageDisplay');
        imageDisplay.src = linkUrl;



        // Handle success or update state as needed
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }
  };

  return (
    <div>
      <div className="file-upload-container">
        <div
          className="drop-box"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {file ? (
            <p>File selected: {file.name}</p>
          ) : (
            <p>Drag and drop a file here, or click to select a file.</p>
          )}
          <input type="file" onChange={handleFileChange} />
        </div>
        <button onClick={handleUpload}>Upload Portfolio</button>
      </div>
      <div className="userPortfolioContainer">
            
        <img id="imageDisplay" alt="Portfolio" />
      </div>
    </div>
  );
}
