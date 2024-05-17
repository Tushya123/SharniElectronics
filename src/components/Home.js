import React, { useState, useEffect } from "react";

import "react-magic-slider-dots/dist/magic-dots.css";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import star from "../assets/images/new-home/star.png";
import aeo from "../assets/images/new-home/aeo.png";
import iso from "../assets/images/new-home/iso.png";
import about from "../assets/images/new-home/about-img.jpg";
import pharmaceutical from "../assets/images/new-home/pharmaceutical.svg";
import cosmetics from "../assets/images/new-home/cosmetics.svg";
import conveyor from "../assets/images/new-home/conveyor-belt.svg";
import blog from "../assets/images/new-home/blog-banner.png";
import news from "../assets/images/new-home/news-blog.jpg";
import shape3 from "../assets/images/shape/shape-3.png";
import industry from "../assets/images/new-home/industry-serve-bg-img.jpg";
import chooseus from "../assets/images/background/chooseus-bg.jpg";
import shape21 from "../assets/images/shape/shape-21.png";
import funfact from "../assets/images/background/funfact-bg.jpg";
import shape10 from "../assets/images/shape/shape-10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/images/new-home/banner-1.jpg";
import banner2 from "../assets/images/new-home/banner-2.jpg";
import { Link } from "react-router-dom";
import Products from "./Productss";
import Header from "./Header";
import axios from "axios";
import Blog from "./Blog";
import AboutUs from "./AboutUs";
import Inquiry from "./Inquiry";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import NewsEvent from "./NewsEvent";

export default function Home() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return (
        <MagicSliderDots
          dots={dots}
          numDotsToShow={4}
          dotWidth={30}
          autoplay={true}
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
        setBanner(response.data);
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
      <div className="boxed_wrapper">
        <Header />
        {/* <!-- banner-section --> */}
        <section className="banner-section banner-style-one">
          <Slider {...settings}>
            {banner.map((bannerItem, index) => (
              <div className="slide-item position-slider" key={index}>
                <div className="image-layer">
                  <img
                    src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${bannerItem.bannerImage}`}
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="auto-container">
                  <div className="content-box">
                    <div className="content-inner">
                      <span className="count-text"></span>
                      <ul className="custom-slider-icon">
                        <li>
                          <img src={star} alt="" />
                        </li>
                        <li>
                          <img src={aeo} alt="" />
                        </li>
                        <li>
                          <img src={iso} alt="" />
                        </li>
                      </ul>
                      <h2 style={{ color: "white" }}>
                        {bannerItem.Description}
                      </h2>
                      <ul className="list clearfix">
                        <li>
                          <div className="icon-box">
                            {/* <i className="flaticon-laboratory-1"></i> */}
                          </div>
                          <h3
                            style={{
                              color: "white",
                              fontSize: "36px",
                              lineHeight: "44px",
                              fontWeight: 500,
                            }}
                          >
                            100+
                          </h3>
                          <h4
                            style={{
                              color: "white",
                              fontSize: "36px",
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
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* <!-- banner-section end --> */}
        {/* <!-- about-section --> */}
        <AboutUs />
        {/* <!-- about-section end --> */}
        {/* <!-- service-section --> */}
        <Products />
        {/* <!-- service-section end --> */}
        {/* <!-- industries-section end --> */}
        <section className="industries-section sec-pad">
          <div
            className="pattern-layer"
            style={{ backgroundImage: `url(${shape3})` }}
          ></div>
          <div className="auto-container">
            <div className="inner-container">
              <div
                className="bg-layer"
                style={{ backgroundImage: `url(${industry})` }}
              ></div>
              <div className="content-box">
                <div className="shape-box">
                  <div className="shape shape-1 hexagon_shape"></div>
                  <div className="shape shape-2 hexagon_shape"></div>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                    <div className="industries-block-one"></div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                    <div className="industries-block-one">
                      <div className="inner-box">
                        <div className="icon-box icon-box1">
                          <img src={pharmaceutical} alt="" />
                        </div>
                        <h6>Industry 01</h6>
                        <h3>
                          <a href="#">Pharmaceuticals</a>
                        </h3>
                        <p>Advancing health, improving lives.</p>
                        <div className="link">
                          <a href="#">
                            <i className="flaticon-right-arrow"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                    <div className="industries-block-one">
                      <div className="inner-box">
                        <div className="icon-box icon-box1">
                          <img src={cosmetics} alt="" />
                        </div>
                        <h6>Industry 02</h6>
                        <h3>
                          <a href="#">Cosmetic Industries</a>
                        </h3>
                        <p>Beauty and personal care products.</p>
                        <div className="link">
                          <a href="#">
                            <i className="flaticon-right-arrow"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                    <div className="industries-block-one ">
                      <div className="inner-box ">
                        <div className="icon-box icon-box1">
                          <img src={conveyor} alt="" />
                        </div>
                        <h6>Industry 03</h6>
                        <h3>
                          <a href="#">Food Industries</a>
                        </h3>
                        <p>Nutritious, quality food production.</p>
                        <div className="link">
                          <a href="#">
                            <i className="flaticon-right-arrow"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                    <div className="sec-title mr-0 light">
                      <span className="sub-title">our industries</span>
                      <h2>
                        Industries <br />
                        that we served
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                    <div className="industries-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="flaticon-bread"></i>
                        </div>
                        <h6>Industry 04</h6>
                        <h3>
                          <a href="#">Nutraceuticals </a>
                        </h3>
                        <p>Enhanced health supplement foods.</p>
                        <div className="link">
                          <a href="#">
                            <i className="flaticon-right-arrow"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                    <div className="industries-block-one">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="flaticon-automobile"></i>
                        </div>
                        <h6>Industry 05</h6>
                        <h3>
                          <a href="#">Veterinary industries</a>
                        </h3>
                        <p>Animal health and wellness.</p>
                        <div className="link">
                          <a href="#">
                            <i className="flaticon-right-arrow"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- industries-section end --> */}
        {/* <!-- chooseus-section --> */}
        <section className="chooseus-section bg-color-1">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${chooseus})` }}
          ></div>
          <div className="auto-container">
            <div className="sec-title">
              <span className="sub-title">Why Choose Us</span>
              <h2>Our Strenghts</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div
                      className="shape"
                      style={{ backgroundImage: `url(${shape21})` }}
                    ></div>
                    <div className="icon-box">
                      <i className="flaticon-check-mark"></i>
                    </div>

                    <h4>
                      Wide selection of world className pharmaceutical bulk
                      drugs offered under one roof.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div
                      className="shape"
                      style={{ backgroundImage: `url(${shape21})` }}
                    ></div>
                    <div className="icon-box">
                      <i className="flaticon-check-mark"></i>
                    </div>

                    <h4>
                      A transparent working system for fair business dealings.
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div
                      className="shape"
                      style={{ backgroundImage: `url(${shape21})` }}
                    ></div>
                    <div className="icon-box">
                      <i className="flaticon-check-mark"></i>
                    </div>

                    <h4>
                      Vigorous supply-chain management for efficient collection
                      and delivery of products.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div
                      className="shape"
                      style={{ backgroundImage: `url(${shape21})` }}
                    ></div>
                    <div className="icon-box">
                      <i className="flaticon-check-mark"></i>
                    </div>

                    <h4>
                      Impeccable quality, utmost customer satisfaction and
                      excellence--our hallmark.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div
                      className="shape"
                      style={{ backgroundImage: `url(${shape21})` }}
                    ></div>
                    <div className="icon-box">
                      <i className="flaticon-check-mark"></i>
                    </div>

                    <h4>
                      No compromises on quality as it represents the image of
                      our company.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                <div className="chooseus-block-one">
                  <div className="inner-box">
                    <div
                      className="shape"
                      style={{ backgroundImage: `url(${shape21})` }}
                    ></div>
                    <div className="icon-box">
                      <i className="flaticon-check-mark"></i>
                    </div>

                    <h4>
                      We have a long association with the pharma industry &amp;
                      can offer you excellent service.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- chooseus-section end --> */}
        {/* <!-- funfact-section --> */}
        <section className="funfact-section centred">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${funfact})` }}
          ></div>
          <div className="auto-container">
            <div className="sec-title light">
              <span className="sub-title">Interesting Numbers</span>
              <h2>Facts that will blow your mind</h2>
            </div>
            <div className="inner-content">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-rating"></i>
                      </div>
                      <div className="count-outer count-box counted">
                        <span
                          className="count-text"
                          data-speed="1500"
                          data-stop="1000"
                        >
                          1000
                        </span>
                      </div>
                      <h3>Our Happy Clients</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-atom"></i>
                      </div>
                      <div className="count-outer count-box counted">
                        <span
                          className="count-text"
                          data-speed="1500"
                          data-stop="100"
                        >
                          100
                        </span>
                      </div>
                      <h3>Our Qulity Products</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                  <div className="funfact-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-lab"></i>
                      </div>
                      <div className="count-outer count-box counted">
                        <span
                          className="count-text"
                          data-speed="1500"
                          data-stop="100"
                        >
                          100
                        </span>
                        <span>%</span>
                      </div>
                      <h3>Accurate and Precise in Test Results</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- funfact-section end --> */}
        {/* <!-- blog-grid --> */}
        <Blog />
        {/* <!-- blog-grid end --> */}
        {/* <!-- news-section --> */}

        <NewsEvent />
        {/* <!-- news-section end --> */}
        {/* <!-- booking-section --> */}
        <Inquiry />
        {/* <!-- booking-section end --> */}
        {/* <!-- locations-section --> */}
        <section className="locations-section sec-pad centred">
          <div
            className="pattern-layer"
            style={{ backgroundImage: `url(${shape10})` }}
          ></div>
          <div className="auto-container">
            <div className="sec-title">
              <span className="sub-title">Locations</span>
              <h2>
                Support across 50+ countries <br />
                around the world
              </h2>
            </div>
            <div className="row clearfix justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 location-block mt-5">
                <div className="location-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src={footer} alt="" />
                    </figure>
                    <h6>SHREEJI PHARMA INTERNATIONAL</h6>
                    <h3>
                      311, Atlantis Heights, Sarabhai Main Road, Vadiwadi,
                      Vadodara - 390 007, Gujarat, INDIA.
                    </h3>
                    <div className="custom-info">
                      <div className="link">
                        <a href="mailto:contact@shreejipharma.com">
                          Email : contact@shreejipharma.com
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                      <div className="link">
                        <a href="tel:8866002331">
                          Contact : +91 8866002331{" "}
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                      <div className="link">
                        <a href="skype:Nilesh.sheth70?Call">
                          Skype ID: Nilesh.sheth70{" "}
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                    <div className="link">
                      <a
                        href="#"
                        target="_blank"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModa"
                      >
                        Locate Us <i className="flaticon-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- locations-section end --> */}
        <div className="sticky-button">
          <a
            href="assets/catalogue-shreeji-pharma.pdf"
            target="__blank"
            download=""
          >
            Download Brochure
          </a>
        </div>
        <div className="sticky-whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -"
            target="_blank"
          >
            <img src={wp} className="img-responsive" />
          </a>
        </div>
        <div className="sticky-skype">
          <a href="skype:Nilesh.sheth70?Call" target="_blank">
            <img src={skype} className="img-responsive" />
          </a>
        </div>
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
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- scroll to top --> */}
        <button className="scroll-top scroll-to-target open" data-target="html">
          <i className="flaticon-up-arrow"></i>
        </button>
      </div>
    </React.Fragment>
  );
}
