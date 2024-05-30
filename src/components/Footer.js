import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Figure, Row, Col, Container } from "react-bootstrap";
import GoogleTranslate from "./GoogleTranslate";

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
      <footer className="main-footer footer-style-two py-5">
        <Container>
          <div className="widget-section">
            <Row className="clearfix">
              <Col lg={5} md={6} sm={12} className="mb-4">
              {/* <GoogleTranslate/> */}

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
                  <div className="lower-box d-flex align-items-center mt-3">
                    <div className="icon-box me-2">
                      <i className="flaticon-atom-1"></i>
                    </div>
                    <h5 className="mb-0">ISO 9001-2015 Certified</h5>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={6} sm={12} className="mb-4">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Quick Links</h3>

                  </div>
                  <div className="widget-content">
                    <ul className="links-list list-unstyled">
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
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={6} sm={12} className="mb-4">
                <div className="footer-widget gallery-widget">
                  <div className="widget-title">
                    <h3>Gallery</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="image-list list-unstyled d-flex flex-wrap">
                      {galleryData.map((item, index) => (
                        <li key={index} className="me-2 mb-2">
                          <Figure className="image mb-0">
                            <img
                              src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                              alt=""
                              className="img-fluid"
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
              </Col>
            </Row>
          </div>
          <div className="footer-bottom py-3">
            <Row>
              <Col lg={6} md={12} className="text-lg-start text-center mb-3 mb-lg-0">
                <div className="copyright">
                  <p className="mb-0">
                    Copyright © 2024 <a href="#">Shreeji Pharma </a> All Rights Reserved
                  </p>

                </div>
              </Col>
              <Col lg={6} md={12} className="text-lg-end text-center">
                <div className="copyright">
                  <p className="mb-0">
                    Design & Develop By{" "}
                    <a href="https://www.barodaweb.com/" target="_blank" rel="noopener noreferrer">
                      Barodaweb | The E-Catalouge Designer
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>

      <Button className="scroll-top scroll-to-target" data-target="html">
        <i className="flaticon-up-arrow"></i>
      </Button>
    </React.Fragment>
  );
}
