import React, { useState, useEffect } from "react";
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
import booking from "../assets/images/background/booking-bg.jpg";
import shape7 from "../assets/images/shape/shape-7.png";
import shape8 from "../assets/images/shape/shape-8.png";
import shape9 from "../assets/images/shape/shape-9.png";
import shape10 from "../assets/images/shape/shape-10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/images/new-home/banner-1.jpg";
import banner2 from "../assets/images/new-home/banner-2.jpg";
import { Link } from "react-router-dom";
import Products from "./Productss";
import Header from "./Header";

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
  };

  return (
    <React.Fragment
      style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <div className="boxed_wrapper">
        <Header />
        {/* <!-- banner-section --> */}
        <section className="banner-section banner-style-one">
          <Slider
            class="banner-carousel owl-theme owl-carousel owl-nav-none"
            {...settings}
          >
            <div className="slide-item position-slider">
              <div className="image-layer">
                <img src={banner1} className="w-100" alt="" />
              </div>
              <div className="auto-container">
                <div class="content-box">
                  <div class="content-inner">
                    <span class="count-text"></span>
                    <ul class="custom-slider-icon">
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
                    <h2
                      style={{
                        color: "white",
                        fontSize: "45px",
                        lineHeight: "65px",
                        fontWeight: 500,
                      }}
                    >
                      A Government of India <br /> recognised Star Export House
                    </h2>
                    <ul class="list clearfix">
                      <li>
                        <div class="icon-box">
                          <i
                            style={{ color: "white" }}
                            class="flaticon-laboratory-1"
                          ></i>
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
            <div className="slide-item position-slider">
              <div className="image-layer">
                <img src={banner2} className="w-100" alt="" />
              </div>
              <div className="auto-container">
                <div class="content-box">
                  <div class="content-inner">
                    <span class="count-text"></span>
                    <ul class="custom-slider-icon">
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
                    <h2
                      style={{
                        color: "white",
                        fontSize: "45px",
                        lineHeight: "65px",
                        fontWeight: 500,
                      }}
                    >
                      A Government of India <br />
                      recognised Star Export House
                    </h2>
                    <ul class="list clearfix">
                      <li>
                        <div class="icon-box">
                          <i
                            style={{ color: "white" }}
                            class="flaticon-laboratory-1"
                          ></i>
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
          </Slider>
        </section>
        {/* <!-- banner-section end --> */}
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
                      India in the field of Active Pharma Ingredients,
                      Chemicals, Pharmaceuticals Raw Materials, herbals,
                      Phytochemicals &amp; Intermediates. We thus, mainly focus
                      on the exports of the APIs with high levels of integrity,
                      respect &amp; recognition.
                    </p>
                  </div>
                  <div className="btn-box">
                    <a href="about.html" className="theme-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section className="blog-grid news-style-two sec-pad sec-pad1">
          <div className="auto-container">
            <div className="sec-title">
              <span className="sub-title">Blogs</span>
              <h2>Explore our latest blogs</h2>
              <div className="btn-box">
                <a href="#" className="theme-btn">
                  View All Blogs
                </a>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={blog} alt="" />
                      </figure>
                      <div className="link-btn">
                        <a href="">
                          <i className="flaticon-zoom-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="category">
                        <a href="">Laboratory</a>
                      </div>
                      <ul className="post-info clearfix">
                        <li>11 August, 2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">Blog Title 1</a>
                      </h3>
                      <div className="lower-box">
                        <div className="link">
                          <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={blog} alt="" />
                      </figure>
                      <div className="link-btn">
                        <a href="">
                          <i className="flaticon-zoom-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="category">
                        <a href="">Research</a>
                      </div>
                      <ul className="post-info clearfix">
                        <li>21 July, 2022</li>
                      </ul>
                      <h3>
                        <a href="">Blog Title 2</a>
                      </h3>
                      <div className="lower-box">
                        <div className="link">
                          <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- blog-grid end --> */}
        {/* <!-- news-section --> */}
        <section className="news-section sec-pad">
          <div className="auto-container">
            <div className="sec-title">
              <span className="sub-title">News &amp; Events</span>
              <h2>Explore our latest post</h2>
              <div className="btn-box">
                <a href="#" className="theme-btn">
                  View All News
                </a>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={news} alt="" />
                      </figure>
                      <div className="link-btn">
                        <a href="#">
                          <i className="flaticon-zoom-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="category">
                        <a href="#">Shreeji Pharma</a>
                      </div>
                      <ul className="post-info clearfix">
                        <li>24 October, 2023</li>
                      </ul>
                      <h3>
                        <a href="#">
                          Kindly visit our Booth at CPHI – Worldwide, Barcelona
                        </a>
                      </h3>
                      <div className="lower-box">
                        <div className="link">
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={news} alt="" />
                      </figure>
                      <div className="link-btn">
                        <a href="#">
                          <i className="flaticon-zoom-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="category">
                        <a href="#" v="">
                          Shreeji Pharma
                        </a>
                      </div>
                      <ul className="post-info clearfix">
                        <li>24 October, 2023</li>
                      </ul>
                      <h3>
                        <a href="#">
                          Kindly visit our Booth at CPHI – Worldwide, Barcelona
                        </a>
                      </h3>
                      <div className="lower-box">
                        <div className="link">
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={news} alt="" />
                      </figure>
                      <div className="link-btn">
                        <a href="#">
                          <i className="flaticon-zoom-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="category">
                        <a href="#">Shreeji Pharma</a>
                      </div>
                      <ul className="post-info clearfix">
                        <li>24 October, 2023</li>
                      </ul>
                      <h3>
                        <a href="#">
                          Kindly visit our Booth at CPHI – Worldwide, Barcelona
                        </a>
                      </h3>
                      <div className="lower-box">
                        <div className="link">
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- news-section end --> */}
        {/* <!-- booking-section --> */}
        <section className="booking-section sec-pad">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${booking})` }}
          ></div>
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{ backgroundImage: `url(${shape7})` }}
            ></div>
            <div
              className="pattern-2"
              style={{ backgroundImage: `url(${shape8})` }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="row clearfix custom-form">
              <div className="col-lg-5-new col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <span className="rotate-text">contact us</span>
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape9})` }}
                  ></div>
                  <div className="sec-title light">
                    <span className="sub-title">Inquiry Now</span>
                    <h2>
                      Get your solution by contact us we'll reach you soon
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                <div className="inner-content">
                  <div className="form-inner">
                    <form>
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <i className="fa-solid fa-circle-user"></i>
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <i className="fa-solid fa-phone"></i>
                          <label>Number</label>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Enter your number"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <i className="fa-solid fa-envelope"></i>
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            required=""
                            placeholder="Enter your Email"
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <label>Select Country</label>
                          <div className="select-box">
                            <select
                              className="selectmenu"
                              name="country"
                              style={{ display: "none" }}
                            >
                              <option selected="selected">
                                Select Country
                              </option>
                              <option>Australia</option>
                              <option>Canada</option>
                              <option>France</option>
                              <option>Germany</option>
                              <option>India</option>
                              <option>Italy</option>
                              <option>Japan</option>
                            </select>
                            <div
                              className="nice-select selectmenu"
                              tabindex="0"
                            >
                              <span className="current">Select Country</span>
                              <ul className="list">
                                <li
                                  data-value="Select Country"
                                  className="option selected"
                                >
                                  Select Country
                                </li>
                                <li data-value="Australia" className="option">
                                  Australia
                                </li>
                                <li data-value="Canada" className="option">
                                  Canada
                                </li>
                                <li data-value="France" className="option">
                                  France
                                </li>
                                <li data-value="Germany" className="option">
                                  Germany
                                </li>
                                <li data-value="India" className="option">
                                  India
                                </li>
                                <li data-value="Italy" className="option">
                                  Italy
                                </li>
                                <li data-value="Japan" className="option">
                                  Japan
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <label>Message</label>
                          <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="3"
                            required=""
                            className="custom-textarea"
                          ></textarea>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button type="submit" className="theme-btn">
                            Submit Here
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
