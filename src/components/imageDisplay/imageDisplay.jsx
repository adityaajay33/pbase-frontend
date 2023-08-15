import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageDisplay() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Replace with the actual API endpoint for fetching images by ID
    const imageID = 'replace_with_actual_image_id';
    axios.get(`/api/images/${imageID}`, { responseType: 'arraybuffer' })
      .then(response => {
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const imageUrl = URL.createObjectURL(blob);
        setImageData(imageUrl);
      })
      .catch(error => {
        console.error('Error fetching image', error);
      });
  }, []);

  return (
    <div>
      {imageData && <img src={imageData} alt="Fetched Image" />}
    </div>
  );
}

export default ImageDisplay;