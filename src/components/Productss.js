import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Container, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        const activeCertificates = response.data.filter(
          (product) => product.IsActive
        );

        setProducts(activeCertificates);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#16436f",borderRadius:"10px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#16436f" ,borderRadius:"10px"}} 
      onClick={onClick}
    />
  );
};


  return (
    <React.Fragment>
      <section className="service-section bg-color-1 sec-pad">
        <Container>
          <div className="sec-title">
            <span className="sub-title">Our Products</span>
            <h2>We Provide Quality Product</h2>
          </div>
          <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
            {products.map((product, index) => (
              <div className="service-block-one" key={index}>
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <img
                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${product.ImageUrl}`}
                        alt={product.ProductGroup}
                      />
                    </Figure>
                    <div className="icon-box">
                      <i className="flaticon-biochemistry"></i>
                    </div>
                  </div>
                  <div className="lower-content">
                  <Link
                                  onClick={() => {
                                    window.location.href = "/products";
                                    localStorage.setItem(
                                      "selectedProductId",
                                      product.ProductGroup
                                    );
                                  }}
                                >
                    <h3>{product.ProductGroup}</h3>
                                </Link>

                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </React.Fragment>
  );
}
