import React from "react";
import about from "../assets/images/new-home/about-img.jpg";

export default function About() {
  return (
    <>
      {/* <!-- about-section --> */}
      <section className="about-section sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <div className="shape-box">
                  <div className="shape shape-1 hexagon_shape"></div>
                  <div className="shape shape-2 hexagon_shape"></div>
                  <div className="shape shape-3 hexagon_shape"></div>
                </div>
                <div className="image-inner hexagon_shape">
                  <figure className="image">
                    <img src={about} alt="" />
                  </figure>
                </div>
                <div className="text">
                  <div className="inner">
                    <h2>
                      20<span>+</span>
                    </h2>
                    <h6>
                      Years of <br />
                      Experience
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="sec-title">
                  <span className="sub-title">
                    Welcome to Shreeji Pharma International
                  </span>
                  <h2>About Us</h2>
                </div>
                <div className="text">
                  <p>
                    We SHREEJI PHARMA International, established in 2004, are
                    proud to introduce ourselves as one of the leading
                    Manufacturer , Exporters AND GLOBAL SOURCING COMPANY in
                    India in the field of Active Pharma Ingredients, Chemicals,
                    Pharmaceuticals Raw Materials, herbals, Phytochemicals &
                    Intermediates. We thus, mainly focus on the exports of the
                    APIs with high levels of integrity, respect & recognition.
                  </p>
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about-section end --> */}
    </>
  );
}
