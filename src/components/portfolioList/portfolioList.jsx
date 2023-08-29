import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import "./portfolioList.css"

const cookies = new Cookies();

export default function PortfolioList({ userID }) {
  const user = userID;

  console.log(user);
  const linkData = "http://localhost:5000/api/user/userdata/"+String(user);


  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    const fetchImages = async () => {
        try{
            const response = await axios.get(linkData);
            const listUrl = response.data.idList;
            const imgUrls = [];

            for (let item of listUrl){
                imgUrls.push('http://localhost:5000/api/portfolios/images/'+String(item));
            }

            setImages(imgUrls);
            console.log(images);
            setLoading(false);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchImages();
  }, [linkData]);
  

  return (
    <div className="overallComponent">
        <div className='portfolioBorder'>
            {loading ? (
                <p>Loading...</p> 
            ) : (
                images.map(image => (
                <img className="portfolioImagesContainer" key={image._id} src={image} />
                ))
            )}
        </div>
    </div>
  )
}
