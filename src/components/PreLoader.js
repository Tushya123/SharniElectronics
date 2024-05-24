// src/components/Preloader.js

import React from 'react';
import logo from "../assets/images/new-home/logo.png"

const Preloader = () => (
  <React.Fragment>
  <div className="loader-wrap" style={{ display: "none" }}>
    <div className="preloader">
      <div className="preloader-close">x</div>
      <div id="handle-preloader" className="handle-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <img src={logo} alt="Loading logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
);

export default Preloader;
