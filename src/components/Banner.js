import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/images/new-home/banner-1.jpg";
import banner2 from "../assets/images/new-home/banner-2.jpg";
import star from "../assets/images/new-home/star.png";
import aeo from "../assets/images/new-home/aeo.png";
import iso from "../assets/images/new-home/iso.png";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section class="banner-section banner-style-one">
    {/* <div class="banner-carousel owl-theme owl-carousel owl-nav-none"> */}


    <Slider {...settings}>
      <div className="slide-item">
        <div className="image-layer">
          <img src={banner1} className="w-100" alt="Banner 1" />
        </div>
        <div className="auto-container iso-position">
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
              <h2 style={{ color: "white" }}>
                A Government of India <br />
                recognised Star Export House
              </h2>
              <ul class="list clearfix">
                <li>
                  <div class="icon-box">
                    <i class="flaticon-laboratory-1"></i>
                  </div>
                  <h3 style={{ color: "white" }}>100+</h3>
                  <h4 style={{ color: "white" }}>Quality Product</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-item">
        <div className="image-layer">
          <img src={banner2} className="w-100" alt="Banner 2" />
        </div>
        <div className="auto-container">
          <div class="content-box">
            <div class="content-inner">
              <span class="count-text">01.</span>
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
              <h2>A Government of India recognised Star Export House</h2>
              <ul class="list clearfix">
                <li>
                  <div class="icon-box">
                    <i class="flaticon-laboratory-1"></i>
                  </div>
                  <h3>100+</h3>
                  <h4>Quality Product</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    {/* </div> */}
    </section>
  );
}
