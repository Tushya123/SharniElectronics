import React, { useState, useEffect } from "react";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import shape10 from "../assets/images/shape/shape-10.jpg";
import axios from "axios";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Image,
  Figure,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Preloader from "../components/PreLoader";
import Stickey from "../components/Stickey";

export default function Certificate() {
  const [certificate, setCertificate] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
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
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Certificate`
        );
        console.log("Gallery Data:", response);
        const activeCertificates = response.data.filter(
          (certificate) => certificate.IsActive
        );
        setCertificate(activeCertificates);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  const handleZoomInClick = (certificateImage) => {
    setSelectedCertificate(certificateImage);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <React.Fragment
      style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <Stickey />
      {!certificate || certificate?.length < 1 ? (
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
                  <h1>Certificate</h1>
                  <ul className="bread-crumb clearfix">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Certificate</li>
                  </ul>
                </div>
              </Container>
            </section>
            <section className="service-details sec-pad">
              <Container>
                <Row className="clearfix">
                  {certificate.map((item, index) => (
                    <Col
                      key={index}
                      lg={3}
                      md={6}
                      sm={12}
                      className="project-block gallery"
                    >
                      <div className="project-block-one">
                        <div className="inner-box">
                          <div className="static-content">
                            <Figure className="image-box">
                              <Image
                                src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.CertificateImage}`}
                                alt={item.Title}
                                fluid
                              />
                            </Figure>
                            <div className="text-center">
                              <h5 className="gal-txt">{item.Title}</h5>
                            </div>
                          </div>
                          <div className="overlay-content">
                            <div className="image-box">
                              <Figure className="image">
                                <Image
                                  src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.CertificateImage}`}
                                  alt={item.Title}
                                  fluid
                                />
                              </Figure>
                              <h5 className="gal-txt">{item.Title}</h5>
                              <div className="view-btn">
                                <Button
                                  variant="link"
                                  onClick={() =>
                                    handleZoomInClick(item.CertificateImage)
                                  }
                                >
                                  <i
                                    className="flaticon-zoom-in"
                                    style={{ color: "white" }}
                                  ></i>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
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
                          B/9 Nityanand park sussen tarsali ring road Vadodara 

                        </h3>
                        <div className="custom-info">
                          <div className="link">
                            <Link to="mailto:sales@sharnielectronics.com">
                              Email : sales@sharnielectronics.com
                              <i className="flaticon-right-arrow"></i>
                            </Link>
                          </div>
                          <div className="link">
                            <Link to="tel:93287 10379">
                              Contact 1 : +91 93287 10379
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
              <Link
                to="assets/catalogue-shreeji-pharma.pdf"
                target="__blank"
                download=""
              >
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
                <Modal.Title>Tarsali, Vadodara</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.5732785948676!2d73.2021939743432!3d22.25626374449201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5cac078125f%3A0xb8db50355a82afd!2sNityanand%20Park!5e0!3m2!1sen!2sin!4v1722598547251!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Modal.Body>
            </Modal>
            <Button className="scroll-top scroll-to-target" data-target="html">
              <i className="flaticon-up-arrow"></i>
            </Button>

            <Modal show={!!selectedCertificate} onHide={closeModal}>
              <Modal.Header closeButton />
              <Modal.Body>
                {selectedCertificate && (
                  <Image
                    src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${selectedCertificate}`}
                    style={{ width: "100%" }}
                    fluid
                  />
                )}
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
