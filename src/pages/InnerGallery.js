import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailedGallery() {
  const { id } = useParams();
  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/get/GalleryPhoto/${id}`
        );
        console.log("Gallery Data:", response);
        setGalleryData(response.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, [id]);

  return (
    <div>
      {galleryData && (
        <div>
          {galleryData.images.map((image, index) => (
            <img key={index} 
            src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${image.imageURL}`}
            alt={`Image ${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DetailedGallery;
