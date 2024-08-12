import React, { useState, useEffect } from "react";
import "react-magic-slider-dots/dist/magic-dots.css";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import star from "../assets/images/new-home/star.png";
import aeo from "../assets/images/new-home/aeo.png";
import iso from "../assets/images/new-home/iso.png";
import shape10 from "../assets/images/shape/shape-10.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./Productss";
import LineCard from "./LineCard";

import Header from "./Header";
import axios from "axios";
import Blog from "./Blog";
import AboutUs from "./AboutUs";
import Inquiry from "./Inquiry";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import NewsEvent from "./NewsEvent";
import Industries from "./Industries";
import Strenghts from "./Strenghts";
import Facts from "./Facts";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Figure,
  Image,
} from "react-bootstrap";
import Preloader from "./PreLoader";
import { Link } from "react-router-dom";
import Stickey from "./Stickey";

export default function Home() {
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

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return (
        <MagicSliderDots
          dots={dots}
          numDotsToShow={4}
          dotWidth={30}
          // autoplay={true}
          speed={500}
          slidesToScroll={1}
          slidesToShow={1}
        ></MagicSliderDots>
      );
    },
  };

  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Banner`
        );
        console.log("Gallery Data:", response);
        const activeCertificates = response.data.filter(
          (Banner) => Banner.IsActive
        );
        setBanner(activeCertificates);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment
    style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <Stickey />
      {!banner || banner?.length < 1 ? (
        <Preloader />
      ) : (
        <>
          <div className="boxed_wrapper">
          <section className="banner-carousel banner-style-one">
              <Slider {...settings}>
                {banner.map((bannerItem, index) => (
               
                  <div className="slide-item position-slider" key={index}>
                  {console.log("hii",bannerItem.bannerImage)}
                    <div className="image-layer">
                    <video
                    className="img-fluid"
                    width={"100%"}
                    autoPlay
                    loop
                    muted
                  >
                    <source
                          src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${bannerItem.bannerImage}`}
                      type="video/mp4"
                    />
                  </video>
                    </div>
                    <Container>
                      <div className="content-box">
                        <div className="content-inner">
                          <span className="count-text"></span>
                          <ul className="custom-slider-icon">
                            {/* <li>
                              <img src={star} alt="" />
                            </li>
                            <li>
                              <img src={aeo} alt="" />
                            </li>
                            <li>
                              <img src={iso} alt="" />
                            </li> */}
                          </ul>
                          <h2 style={{ color: "white", textAlign: "justify" }}>
                            {bannerItem.Description}
                          </h2>
                          <ul
                            className="list clearfix"
                            style={{ textAlign: "justify" }}
                          >
                            <li>
                              <div className="icon-box">
                                <i className="flaticon-laboratory-1"></i>
                              </div>
                              <h3
                                style={{
                                  color: "white",
                                  fontSize: "27px",
                                  lineHeight: "44px",
                                  fontWeight: 500,
                                }}
                              >
                                100+
                              </h3>
                              <h4
                                style={{
                                  color: "white",
                                  fontSize: "27px",
                                  lineHeight: "44px",
                                  fontWeight: 500,
                                }}
                              >
                                Quality Product
                              </h4>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Container>
                  </div>
                ))}
              </Slider>
              </section>
              
            
            <AboutUs />
            <Products />
            <LineCard />
            <Industries />
            <Strenghts />
            <Facts />
            <Blog />
            <NewsEvent />
            <Inquiry />

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
                          B/9 Nityanand park sussen Tarsali Ring Road Vadodara 

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
                to="https://api.whatsapp.com/send?phone=919909247312&amp;text= Hello Sharni Electronics Team, I am interested in -"
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
          {/* <Stickey/> */}
          {/* <button
            className={`scroll-top scroll-to-target ${isVisible ? "open" : ""}`}
            onClick={scrollToTop}
            style={{ display: isVisible ? "block" : "none" }}
          >
            <i className="flaticon-up-arrow"></i>
          </button> */}
        </>
      )}
    </React.Fragment>
  );
}
