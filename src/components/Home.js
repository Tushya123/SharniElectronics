import React, { useState, useEffect } from "react";
import "react-magic-slider-dots/dist/magic-dots.css";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import star from "../assets/images/new-home/star.png";
import aeo from "../assets/images/new-home/aeo.png";
import iso from "../assets/images/new-home/iso.png";
import shape10 from "../assets/images/shape/shape-10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./Productss";
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
                            <div
                              class="icon-box"
                              style={{
                                position: "absolute",
                                left: "0px",
                                top: "10px",
                                width: "70px",
                                height: "60px",
                                lineHeight: "70px",
                                fontSize: "32px",
                                color: "#fff",
                                textAlign: "center",
                              }}
                            >
                              <i class="flaticon-laboratory-1"></i>
                            </div>{" "}
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
        <AboutUs />
        <Products />
        <Industries />
        <Strenghts />
        <Facts />
        <Blog />
        <NewsEvent />
        <Inquiry />

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
      </div>
      <button className="scroll-top scroll-to-target open" data-target="html">
        <i className="flaticon-up-arrow"></i>
      </button>
      ;
    </React.Fragment>
  );
}
