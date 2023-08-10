import React, { useState } from 'react';
import './UserPortfolio.css';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
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
    console.log('File: ', selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      var formData = new FormData();
      formData.append('user', user);
      console.log(user);
      formData.append('file', file);
      console.log(formData);

      try {
        const response = await axios.post(
          'http://localhost:5000/api/portfolios/add',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(response.data);
        // Handle success or update state as needed
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }
  };

  return (
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
  );
}
