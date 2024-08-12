import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Container, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/images/shape/capacitor.png";

export default function LineCard() {
  const arrowStyle = {
    display: "block",
    background: "#16436f",
    borderRadius: "10px",
    zIndex: "2",
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{
        //   ...style,
        //   display: "block",
        //   background: "#16436f",
        //   borderRadius: "10px",
        //   zIndex: "2",
        // }}
        style={{ ...style, ...arrowStyle }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{
        //   ...style,
        //   display: "block",
        //   background: "#16436f",
        //   borderRadius: "10px",
        //   zIndex: "2",
        // }}
        style={{ ...style, ...arrowStyle }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Commitment`
        );
        const activeProducts = response.data.filter(
          (product) => product.IsActive
        );

        // Define the custom order
        const customOrder = [
          "6641abe793c69c545ac233e2",
          "6634b74108aa777d7b59c4c1",
          "663b598ccc6c2844e6838bbc",
        ];

        // Sort the active products according to the custom order
        const sortedProducts = activeProducts.sort((a, b) => {
          const indexA = customOrder.indexOf(a._id);
          const indexB = customOrder.indexOf(b._id);

          if (indexA === -1 && indexB === -1) {
            // Both items are not in the custom order, sort randomly
            return 0.5 - Math.random();
          }

          if (indexA === -1) return 1; // a is not in the custom order, so b comes first
          if (indexB === -1) return -1; // b is not in the custom order, so a comes first

          return indexA - indexB;
        });

        // Separate ordered and unordered products
        const orderedProducts = sortedProducts.filter((product) =>
          customOrder.includes(product._id)
        );
        const unorderedProducts = sortedProducts.filter(
          (product) => !customOrder.includes(product._id)
        );

        // Shuffle unordered products randomly
        const shuffledUnorderedProducts = unorderedProducts.sort(
          () => 0.5 - Math.random()
        );

        // Combine ordered and shuffled unordered products
        const finalSortedProducts = [
          ...orderedProducts,
          ...shuffledUnorderedProducts,
        ];

        console.log("finalSortedProducts", finalSortedProducts);
        console.log("ff", finalSortedProducts);
        setProducts(finalSortedProducts);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <section className="service-section bg-color-1 sec-pad">
        <Container>
          <div className="sec-title">
            <span className="sub-title">Line Card</span>
            {/* <h2>We Provide Quality Product</h2> */}
          </div>
          <Slider {...settings}>
            {products.map((product, index) => (
              <div className="service-block-one" key={index}>
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <img
                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${product.CommitmentImage}`}
                        alt={product.Description}
                        // height="10px"
                        // width="10px"
                      />
                    </Figure>
                    <div className="icon-box">
                    <img
//   style={{ height: '55px',marginLeft:'10px' ,marginTop:'5px'}}  // Comma separates the properties
  src={image}
  alt="Icon"
/>

                    </div>
                  </div>
                  <div className="lower-content">
                    <Link
                      onClick={() => {
                        window.location.href = "/commitment";
                        // localStorage.setItem(
                        //   "selectedProductId",
                        //   product.ProductGroup
                        // );
                      }}
                    >
                      <h3>{product.Description}</h3>
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
