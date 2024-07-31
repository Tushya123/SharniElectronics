import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import { Container, Row, Col, Figure, Image, Button } from "react-bootstrap";
import Preloader from "../components/PreLoader";
import shape10 from "../assets/images/shape/shape-10.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import { Modal } from "react-bootstrap";
import Stickey from "../components/Stickey";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [galleryData1, setGalleryData1] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/GalleryPhoto`
        );
        const activeCertificates = response.data.filter(
          (Gallery) => Gallery.IsActive
        );
        const uniqueCategories = activeCertificates.reduce((acc, current) => {
          const x = acc.find((item) => item.Category === current.Category);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setGalleryData1(uniqueCategories);
        setGalleryData(activeCertificates);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (index) => {
    navigate(`/innergallery/${index}`, {
      state: { galleryData },
    });
  };

  return (
    <React.Fragment>
      <Stickey />
      {!galleryData1 || galleryData1?.length < 1 ? (
        <Preloader />
      ) : (
        <>
          <div className="boxed_wrapper">
            <section className="page-title">
              <div
                className="bg-layer"
                style={{ backgroundImage: `url(${Background})` }}
              ></div>
              <Container className="auto-container">
                <div className="content-box">
                  <h1>Gallery</h1>
                  <ul className="bread-crumb clearfix">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Gallery</li>
                  </ul>
                </div>
              </Container>
            </section>
            <section className="service-details sec-pad">
              <Container className="auto-container">
                <Row className="clearfix">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    className="content-side gal-type"
                  >
                    <div className="service-details-content">
                      <div className="content-five">
                        <Row className="clearfix">
                          {galleryData1.map((item, index) => (
                            <Col
                              key={index}
                              lg={3}
                              md={6}
                              sm={12}
                              className="project-block gallery mb-4"
                              onClick={() =>
                                handleClick(item.GalleryTypeDetails[0]._id)
                              }
                            >
                              <div className="project-block-one">
                                <div className="inner-box">
                                  <div className="static-content">
                                    <Figure className="image-box">
                                      <Image
                                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                                        alt="certificates"
                                      />
                                    </Figure>
                                    <h5 className="gal-txt ps-3 pt-2">
                                      {item.GalleryTypeDetails[0].Category}
                                    </h5>
                                  </div>
                                  <div className="overlay-content">
                                    <div className="image-box">
                                      <Figure className="image">
                                        <Image
                                          src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                                          alt={item.Category}
                                        />
                                      </Figure>
                                      <h5 className="gal-txt">
                                        {item.GalleryTypeDetails[0].Category}
                                      </h5>
                                      <div className="view-btn">
                                        <i
                                          className="flaticon-zoom-in"
                                          style={{ color: "white" }}
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section
              className="locations-section sec-pad text-center"
              style={{
                backgroundImage: `url(${shape10})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Container>
                <div className="sec-title">
                  <span className="sub-title">Locations</span>
                  {/* <h2>
                    Support across 50+ countries <br />
                    around the world
                  </h2> */}
                </div>
                <Row className="clearfix justify-content-center">
                  <Col lg={6} md={6} sm={12} className="location-block mt-5">
                    <div className="location-block-one">
                      <div className="inner-box">
                        <Figure className="image-box">
                          <Image src={footer} alt="" fluid />
                        </Figure>
                        <h6>Sharni Electronics</h6>
                        <h3>
                          Company address-B/9 Nityanand park sussen tarsali ring road Vadodara 

                        </h3>
                        <div className="custom-info">
                          <div className="link">
                            <Link to="mailto:sales@sharnielectronics.com">
                              Email : sales@sharnielectronics.com
                              <i className="flaticon-right-arrow"></i>
                            </Link>
                          </div>
                          <div className="link">
                            <Link to="tel:9925989113">
                              Contact 1 : +91 9925989113
                              <i className="flaticon-right-arrow"></i>
                            </Link>
                          </div>
                          <div className="link">
                            <Link to="tel:9978591864">
                              Contact 2 : +91 9978591864
                              <i className="flaticon-right-arrow"></i>
                            </Link>
                          </div>
                          <div className="link">
                      <Link to="https://www.linkedin.com/in/rohan-sharma-216023301/">
                              Linkedin ID:Rohan Sharma
                              <i className="flaticon-right-arrow"></i>
                            </Link>
                          </div>
                          <div className="link">
                            <Link
                              onClick={() => setShowModal(true)}
                              style={{ color: "#16436f" }}
                            >
                              Locate Us
                              <i className="flaticon-right-arrow"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            {/* <div className="sticky-button">
          <Link to="assets/catalogue-shreeji-pharma.pdf" target="__blank" download="">
            Download Brochure
          </Link>
        </div> */}
            {/* <div className="sticky-whatsapp">
          <Link
            to="https://api.whatsapp.com/send?phone=919925989113&amp;text= Hello Sharni Electronics Team, I am interested in -"
            target="_blank"
          >
            <Image src={wp} className="img-responsive" alt="WhatsApp" />
          </Link>
        </div>
        <div className="sticky-skype">
          <Link to="skype:Nilesh.sheth70?Call" target="_blank">
            <Image src={skype} className="img-responsive" alt="Skype" />
          </Link>
        </div> */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Vadiwadi, Vadodara</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7381.956093641144!2d73.167648!3d22.31667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6c89cabb19%3A0xf803cbcf27adf1aa!2sShreeji%20Pharma%20International!5e0!3m2!1sen!2sus!4v1712310707767!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Modal.Body>
            </Modal>
          </div>
          {/* <button
            className={`scroll-top scroll-to-target ${isVisible ? "open" : ""}`}
            onClick={scrollToTop}
            style={{ display: isVisible ? "block" : "none" }}>
            <i className="flaticon-up-arrow"></i>
          </button> */}
        </>
      )}
    </React.Fragment>
  );
}
