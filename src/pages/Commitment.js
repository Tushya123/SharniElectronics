import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import { Container, Figure, Image, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Preloader from "../components/PreLoader";
import shape10 from "../assets/images/shape/shape-10.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import Stickey from "../components/Stickey";

export default function Commitment() {
  const [commitments, setCommitments] = useState([]);
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
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Commitment`
        );
        const activeCommitments = res.data.filter(
          (commitment) => commitment.IsActive
        );
        setCommitments(activeCommitments);
      } catch (error) {
        console.error("Error fetching commitments:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Stickey />
      {!commitments || commitments.length < 1 ? (
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
                  <h1>Top Companies</h1>
                  <ul className="bread-crumb clearfix">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Line Card</li>
                  </ul>
                </div>
              </Container>
            </section>
            <section className="shop-details commitment">
              <Container className="auto-container">
                <div className="product-discription mb-0">
                  <div className="customer-comment mb-0">
                    <Row className="clearfix justify-content-center">
                      {commitments.map((commitment, index) => {
                        const colClass =
                          index % 4 === 0 || index % 4 === 3
                            ? "col-lg-7 col-md-8 col-sm-12 comment-column"
                            : "col-lg-5 col-md-8 col-sm-12 comment-column";
                        return (
                          <div key={index} className={colClass}>
                            <div className="single-comment-box">
                              <div className="inner-box">
                                <Figure className="comment-thumb">
                                  <Image
                                    src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${commitment.CommitmentImage}`}
                                    alt={`Commitment ${index}`}
                                  />
                                </Figure>
                                <div className="inner">
                                  <h3>{commitment.Title}</h3>
                                  <p>{commitment.Description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Row>
                  </div>
                </div>
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
