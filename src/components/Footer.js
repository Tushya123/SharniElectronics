import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Figure, Row } from "react-bootstrap";

export default function Footer() {
  const [cmsDesc, setcmsDesc] = useState("");
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/GalleryPhoto`
        );
        console.log("Gallery Data:", response);
        setGalleryData(response.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/cms`
        );
        console.log(res);
        const data = res.data.find(
          (entry) => entry._id === "663f0071ef85cf304603e046"
        );
        console.log(data);
        setcmsDesc(data.cmsDesc);
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {/* <!-- main-footer --> */}
      <footer className="main-footer footer-style-two">
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget about-widget">
                  <div className="widget-title">
                    <h3>About Us</h3>
                  </div>
                  <div className="text">
                    {React.createElement("div", {
                      dangerouslySetInnerHTML: {
                        __html: `${cmsDesc}<style>p{font-size:19px;font-weight:400}`,
                      },
                    })}
                  </div>
                  <div className="lower-box">
                    <div className="icon-box">
                      <i className="flaticon-atom-1"></i>
                    </div>
                    <h5>ISO 9001-2015 Certified</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/commitment">Commitment</Link>
                      </li>
                      <li>
                        <Link to="/products">Products</Link>
                      </li>
                      <li>
                        <Link to="/certificate">Certificate</Link>
                      </li>
                      <li>
                        <Link to="/contect">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget gallery-widget">
                  <div className="widget-title">
                    <h3>Gallery</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list clearfix">
                      {galleryData.map((item, index) => (
                        <li key={index}>
                          <Figure className="image">
                            <img
                              src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                              alt=""
                            />
                            <Link
                              to={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                              className="lightbox-image"
                              data-fancybox="gallery"
                            >
                              <i className="flaticon-zoom-in"></i>
                            </Link>
                          </Figure>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <Row className="row">
              <div className="col-lg-6 col-md-12">
                <div className="copyright">
                  <p>
                    Copyright © 2024 <a href="#">Shreeji Pharma </a> All Rights
                    Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-right">
                <div className="copyright">
                  <p>
                    Design & Develop By{" "}
                    <a href="https://www.barodaweb.com/" target="_blank">
                      Barodaweb | The E-Catalouge Designer
                    </a>
                  </p>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- main-footer end --> */}
      {/* <!--====== Modal Start 3 ======--> */}

      <div
        className="modal fade"
        id="exampleModa"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content custom-model-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Vadiwadi, Vadodara
              </h1>
              <button
                type="button"
                className="btn-close custom-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7381.956093641144!2d73.167648!3d22.31667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6c89cabb19%3A0xf803cbcf27adf1aa!2sShreeji%20Pharma%20International!5e0!3m2!1sen!2sus!4v1712310707767!5m2!1sen!2sus"
                width="600"
                height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- scroll to top --> */}
      <Button className="scroll-top scroll-to-target" data-target="html">
        <i className="flaticon-up-arrow"></i>
      </Button>
    </React.Fragment>
  );
}
