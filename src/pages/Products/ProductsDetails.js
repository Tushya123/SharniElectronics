import React, { useEffect, useState } from "react";
import logo from "../../assets/images/new-home/logo1.png";
import Background from "../../assets/images/new-home/breadcrumb-img.jpg";
import skype from "../../assets/images/new-home/skype.png";
import wp from "../../assets/images/new-home/whatsapp.png";
import html2canvas from "html2canvas";

import axios from "axios";
import { Container, Row, Table, Figure, Button, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
const description = localStorage.getItem("description");

export default function ProductsDetails() {
  const [productDetailsss, setProductDetails] = React.useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [prod, setProd] = useState([]);
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

  React.useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_API_URL_SHREEJI_PHARMACY
        }/api/auth/get/productdetail/${localStorage.getItem("description")}`
      )
      .then((response) => {
        console.log("huncncjuhenchjbecvbevchj", response);
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const storedProductIds = localStorage.getItem("productIds");
    if (storedProductIds) {
      setProd(JSON.parse(storedProductIds));
    }
  }, [localStorage.getItem("productIds")]);

  const generatePdf = () => {
    const input = document.getElementById("pdf-content");
    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((el) => (el.style.display = "block"));

    const images = input.getElementsByTagName("img");
    const promises = [];

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (!img.complete) {
        promises.push(
          new Promise((resolve) => {
            img.onload = img.onerror = resolve;
          })
        );
      }
    }

    Promise.all(promises)
      .then(() => {
        return html2canvas(input, { useCORS: true });
      })
      .then((canvas) => {
        hiddenElements.forEach((el) => (el.style.display = "none"));

        const imgData = canvas.toDataURL("image/jpeg");
        const pdf = new jsPDF();
        const imgWidth = 200;
        const pageHeight = 290;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 15;

        while (heightLeft >= 0) {
          pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          if (heightLeft >= 0) {
            pdf.addPage();
          }
          position = heightLeft - imgHeight;
        }
        pdf.save("brochure.pdf");
      })
      .catch((error) => console.error("Error generating PDF: ", error));
  };

  return (
    <React.Fragment
      style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <div className="boxed_wrapper">
        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <Container className="auto-container">
            <div className="content-box">
              <h1>
                {" "}
                {productDetailsss ? productDetailsss.Description : "Loading..."}
              </h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>{localStorage.getItem("selectedProductId")}</li>
              </ul>
            </div>
          </Container>
        </section>
        <section className="sidebar-page-container blog-details sec-pad pro-det ptb-60">
          <Container className="auto-container">
            <Row className="clearfix">
              <Col
                lg={12}
                md={12}
                sm={12}
                className="content-side"
                id="pdf-content"
              >
                <div className="blog-details-content">
                  <div className="content-one row mb-0">
                    <div
                      className={`col-lg-12 col-12 ${isHidden ? "hidden" : ""}`}
                    >
                      <div className="sec-title">
                        <Link to="/">
                          <img style={{ height: "10vh" }} src={logo} alt="" />
                        </Link>
                        <div className="btn-box">
                          <h6 style={{ color: "16436f" }}>
                            Shreeji Pharma International
                          </h6>
                          <li className="custom-border">
                            <h6 style={{ color: "16436f" }}>
                              contact@shreejipharma.com
                            </h6>
                          </li>
                          <li className="support-box custom-border1">
                            <h6>+918866002331</h6>
                          </li>
                        </div>
                      </div>
                    </div>
                    <Col lg={12}>
                      <Row className="justify-content-center">
                        <Col lg={12} className="product-image-banner">
                          <figure className="image-box">
                            {productDetailsss && (
                              <img
                                src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${productDetailsss.ImageUrl}`}
                                onLoad={() =>
                                  console.log("Image loaded successfully")
                                }
                                onError={() =>
                                  console.error("Error loading image")
                                }
                              />
                            )}
                          </figure>
                        </Col>
                        <div className="col-lg-7 mt-4 product-name align-items-center d-flex">
                          <h3 className="producttext">
                            {localStorage.getItem("description")} : Chemical
                            Name
                          </h3>
                        </div>
                        <div className="col-lg-5 col-12 text-right mt-4"></div>
                      </Row>
                    </Col>
                    <Col className="col-lg-12 col-12 mt-4">
                      <div className="table-outer product-detail-table">
                        <Table responsive className="cart-table">
                          <thead className="cart-header">
                            <tr style={{ padding: "0px" }}>
                              <th>Name</th>
                              <th>Detail</th>
                            </tr>
                          </thead>
                          <tbody>
                            {productDetailsss &&
                              productDetailsss.ProductDetailDescription.map(
                                (detail, index) => (
                                  <tr key={index}>
                                    <td>{detail.ProductKey}</td>
                                    <td className="prod-column">
                                      <h5>{detail.ProductValue}</h5>
                                    </td>
                                  </tr>
                                )
                              )}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
              <div className="btn-box clearfix mt-5 text-center">
                <button
                  className="checkout-btn theme-btn responsive"
                  onClick={generatePdf}
                >
                  Download Brochure
                </button>
              </div>
            </Row>
          </Container>
        </section>

        <div className="sticky-button">
          <Link
            to="assets/catalogue-shreeji-pharma.pdf"
            target="__blank"
            download=""
          >
            Download Brochure
          </Link>
        </div>
        <div className="sticky-whatsapp">
          <Link
            to="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -"
            target="_blank"
          >
            <img src={wp} className="img-responsive" />
          </Link>
        </div>
        <div className="sticky-skype">
          <Link to="skype:Nilesh.sheth70?Call" target="_blank">
            <img src={skype} className="img-responsive" />
          </Link>
        </div>

        <button
          className={`scroll-top scroll-to-target ${isVisible ? "open" : ""}`}
          onClick={scrollToTop}
          style={{ display: isVisible ? "block" : "none" }}
        >
          <i className="flaticon-up-arrow"></i>
        </button>
      </div>
    </React.Fragment>
  );
}
