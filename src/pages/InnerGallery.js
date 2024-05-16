// src/pages/ImageView.js

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";

export default function ImageView() {
  const location = useLocation();
  const { galleryData } = location.state;
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="boxed_wrapper">
      <Header />
      <section className="page-title">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Event Name</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Gallery</li>
              <li>Event Name</li>
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

                    <button onClick={handleClose}></button>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        overflowX: "auto",
                      }}
                    >
                      {galleryData.map((item, index) => (
                        
                        <div key={index} style={{ margin: "0 5px" }}>
                          <img
                            src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                            alt={item.Category}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
