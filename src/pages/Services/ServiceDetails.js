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
import doc from "../../assets/images/unnamed.jpg";
import Stickey from "../../components/Stickey";
const description = localStorage.getItem("description");

export default function ServiceDetails() {
  const [productDetailsss, setProductDetails] = React.useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [cmsDesc, setcmsDesc] = useState("");
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
        }/api/auth/get/servicedetail/${localStorage.getItem("servicedescription")}`
      )
      .then((response) => {
        console.log("huncncjuhenchjbecvbevchj", response);
        setProductDetails(response.data);
        setcmsDesc(response.data.CkDesc)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const storedProductIds = localStorage.getItem("serviceIds");
    if (storedProductIds) {
      setProd(JSON.parse(storedProductIds));
    }
  }, [localStorage.getItem("productIds")]);

  // const generatePdf = () => {
  //   axios
  //     .post(
  //       `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/download-pdf`,
  //       { ...productDetailsss },
  //       {
  //         responseType: "blob",
  //         crossOrigin: true,
  //       }
  //     )
  //     .then((response) => {
  //       console.log("response", response);
  //       const url = window.URL.createObjectURL(
  //         new Blob([response.data], { type: "application/pdf" })
  //       );
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", "brochure.pdf");
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link); // Cleanup after download
  //     })
  //     .catch((error) => {
  //       console.error("Error generating PDF: ", error);
  //     });
  // };

  return (
    <React.Fragment
      style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <Stickey />
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
                  <Link to="/services">Services</Link>
                </li>
                <li>{localStorage.getItem("selectedServiceId")}</li>
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
                            Sharni Electronics
                          </h6>
                          <li className="custom-border">
                            <h6 style={{ color: "16436f" }}>
                              sales@sharnielectronics.com
                            </h6>
                          </li>
                          <li className="support-box custom-border1">
                            <h6>+919925989113</h6>
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
                                style={{ height: "170px" }}
                                src={
                                  productDetailsss.ImageUrl
                                    ? `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${productDetailsss.ImageUrl}`
                                    : doc
                                }
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
                        <Row>
                          <Col
                            lg={7}
                            className=" mt-4 product-name align-items-center d-flex"
                          >
                            <h3 className="producttext">
                              {localStorage.getItem("description")}
                            </h3>
                          </Col>
                        </Row>
                        {/* <div className="col-lg-5 col-12 text-right mt-4"></div> */}
                      </Row>
                    </Col>
                    {/* <Col lg={12} className="mt-4">
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
                    </Col> */}
                  </div>
                </div>
              </Col>
              {/* <div className="btn-box clearfix mt-5 text-center">
                <button
                  className="checkout-btn theme-btn responsive"
                  onClick={generatePdf}
                >
                  Download Brochure
                </button>
              </div> */}
            </Row>
          </Container>
        </section>
        <section className="about-section sec-pad">
              <Container>
                <Row className="clearfix justify-content-center">
                  {/* <Col lg={6} md={8} sm={12} className="image-column">
                    <div className="image-box">
                      <div className="shape-box">
                        <div className="shape shape-1 hexagon_shape"></div>
                        <div className="shape shape-2 hexagon_shape"></div>
                        <div className="shape shape-3 hexagon_shape"></div>
                      </div>
                      <div className="image-inner hexagon_shape">
                        <Figure className="image">
                          <Image
                            src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${cmsImage}`}
                            alt=""
                            fluid
                          />
                        </Figure>
                      </div>
                      <div className="text">
                        <div className="inner">
                          <h2>
                            10<span>+</span>
                          </h2>
                          <h6>
                            Years of <br />
                            Experience
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Col> */}
                  <Col className="content-column">
                    <div className="content-box">
                      {/* <div className="sec-title">
                        <span className="sub-title">
                          Welcome to Sharni Electronics
                        </span>
                        <h2>About US</h2>
                      </div> */}
                      <div className="text">
                        {React.createElement("div", {
                          dangerouslySetInnerHTML: {
                            __html: `${cmsDesc}<style>p{font-size:24px;font-weight:500}`,
                          },
                        })}
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
            to="https://api.whatsapp.com/send?phone=919925989113&amp;text= Hello Sharni Electronics Team, I am interested in -"
            target="_blank"
          >
            <img src={wp} className="img-responsive" />
          </Link>
        </div>
        <div className="sticky-skype">
          <Link to="skype:Nilesh.sheth70?Call" target="_blank">
            <img src={skype} className="img-responsive" />
          </Link>
        </div> */}

        {/* <button
          className={`scroll-top scroll-to-target ${isVisible ? "open" : ""}`}
          onClick={scrollToTop}
          style={{ display: isVisible ? "block" : "none" }}
        >
          <i className="flaticon-up-arrow"></i>
        </button> */}
      </div>
    </React.Fragment>
  );
}
