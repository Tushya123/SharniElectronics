import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product6 from "../assets/images/new-home/product-6.jpg";
import product7 from "../assets/images/new-home/product-7.jpg";
import product9 from "../assets/images/new-home/product-9.jpg";
import product1 from "../assets/images/new-home/product-1.jpg";
import product3 from "../assets/images/new-home/product-3.jpg";
import product4 from "../assets/images/new-home/product-4.jpg";

export default function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="service-section bg-color-1 sec-pad">
      <div className="auto-container" >
        <div className="sec-title">
          <span className="sub-title">Our Products</span>
          <h2>We Provide Quality Product</h2>
        </div>
        <Slider {...settings}>
          <div className="service-block-one">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src={product6} alt="" />
                </figure>
                <div className="icon-box">
                  <i className="flaticon-microorganism"></i>
                </div>
              </div>
              <div className="lower-content">
                <h3>Excipients</h3>
              </div>
            </div>
          </div>
          <div className="service-block-one">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src={product7} alt="" />
                </figure>
                <div className="icon-box">
                  <i className="flaticon-skin"></i>
                </div>
              </div>
              <div className="lower-content">
                <h3>Veterinary Raw Material</h3>
              </div>
            </div>
          </div>
          <div className="service-block-one">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src={product9} alt="" />
                </figure>
                <div className="icon-box">
                  <i className="flaticon-skin"></i>
                </div>
              </div>
              <div className="lower-content">
                <h3>Cosmetic Ingredients</h3>
              </div>
            </div>
          </div>
          <div className="service-block-one">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src={product1} alt="" />
                </figure>
                <div className="icon-box">
                  <i className="flaticon-biochemistry"></i>
                </div>
              </div>
              <div className="lower-content">
                <h3>Active Pharmaceuticals</h3>
              </div>
            </div>
          </div>
          <div className="service-block-one">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src={product3} alt="" />
                </figure>
                <div className="icon-box">
                  <i className="flaticon-skin"></i>
                </div>
              </div>
              <div className="lower-content">
                <h3>Pellets &amp; Granules</h3>
              </div>
            </div>
          </div>
          <div className="service-block-one">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img src={product4} alt="" />
                </figure>
                <div className="icon-box">
                  <i className="flaticon-biochemistry"></i>
                </div>
              </div>
              <div className="lower-content">
                <h3>Mineral Fortifiers</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
