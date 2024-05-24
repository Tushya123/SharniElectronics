// src/pages/Gallery.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/GalleryPhoto`
        );
        const activeCertificates = response.data.filter(Gallery => Gallery.IsActive);
        setGalleryData(activeCertificates);

      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (index) => {
    navigate(`/innergallery/${index}`, {
      state: { galleryData},
    });
  };

  return (
    <React.Fragment>
      <div className="boxed_wrapper">
        <Header />
        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>Gallery</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="service-details sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-side gal-type">
                <div className="service-details-content">
                  <div className="content-five">
                    <div className="row clearfix">
                      {galleryData.map((item, index) => (
                        <div
                          key={index}
                          className="col-lg-3 col-md-6 col-sm-12 project-block gallery"
                          onClick={() => handleClick(index)}
                        >
                          <div className="project-block-one">
                            <div className="inner-box">
                              <div className="static-content">
                                <figure className="image-box">
                                  <img
                                    src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                                    alt={item.Category}
                                  />
                                </figure>
                                <h5 className="gal-txt">{item.GalleryTypeDetails[0].Category}</h5>
                              </div>
                              <div className="overlay-content">
                                <div className="image-box">
                                  <figure className="image">
                                    <img
                                      src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                                      alt={item.Category}
                                    />
                                  </figure>
                                  <h5 className="gal-txt">{item.GalleryTypeDetails[0].Category}</h5>
                                  <div className="view-btn">
                                    <i className="flaticon-zoom-in"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
