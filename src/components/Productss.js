import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export default function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 3000 ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/areatype`
        );
        console.log("Data:", response);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      {" "}
      <section className="service-section bg-color-1 sec-pad">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">Our Products</span>
            <h2>We Provide Quality Product</h2>
          </div>
          <Slider {...settings}>
            {products.map((product, index) => (
              <div className="service-block-one" key={index}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${product.ImageUrl}`}
                      />
                    </figure>
                    <div className="icon-box">
                      <i className="flaticon-biochemistry"></i>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h3>{product.ProductGroup}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </React.Fragment>
  );
}
