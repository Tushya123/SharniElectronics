import React, { useEffect, useState } from "react";
import logo from "../../assets/images/new-home/logo1.png";
import Background from "../../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../../assets/images/new-home/footer-location-img.jpg";
import skype from "../../assets/images/new-home/skype.png";
import wp from "../../assets/images/new-home/whatsapp.png";
import news from "../../assets/images/news/news-35.jpg";
import Header from "../../components/Header";
import html2canvas from "html2canvas";

import axios from "axios";
import banner from "../../assets/images/new-home/product-banner.jpg";
import { Container, Row, Table, Figure, Button ,Col} from "react-bootstrap";

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
        console.log("huncncjuhenchjbecvbevchj", response); // log the response data
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.error(error); // log the error
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

    // Show hidden elements
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
        // Re-hide the hidden elements
        hiddenElements.forEach((el) => (el.style.display = "none"));

        const imgData = canvas.toDataURL("image/jpeg");
        const pdf = new jsPDF();
        const imgWidth = 200; // A4 width in mm
        const pageHeight = 290; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 10;

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

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", productDetailsss);

  return (
    <React.Fragment
      style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <div className="boxed_wrapper">
        <Header />
        {/* <!-- page-title --> */}
        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <Container className="auto-container">
            <div className="content-box">
              <h1>                  {productDetailsss
                    ? productDetailsss.Description
                    : "Loading..."}
</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Products</li>
                <li>
                  {productDetailsss
                    ? productDetailsss.Description
                    : "Loading..."}
                </li>{" "}
                {/* Updated line */}
              </ul>
            </div>
          </Container>
        </section>
        {/* <!-- page-title end -->
    <!-- sidebar-page-container --> */}
        <section className="sidebar-page-container blog-details sec-pad pro-det ptb-60">
          <Container className="auto-container">
            <Row className="clearfix">
            <Col lg={12} md={12} sm={12} className="content-side"
                id="pdf-content"
              >
                <div className="blog-details-content">
                  <div className="content-one row mb-0">
                    <div
                      className={`col-lg-12 col-12 ${isHidden ? "hidden" : ""}`}
                    >
                      <div className="sec-title">
                        <Link to="/">
                          <img style={{ height: "30vh" }} src={logo} alt="" />
                        </Link>
                        <div className="btn-box">
                          <h1 style={{ color: "16436f" }}>
                            Shreeji Pharma International
                          </h1>
                          <li className="custom-border">
                            {/* <div className="icon-box">
                              {/* <i className="fa fa-envelope"></i> */}
                            {/* </div>  */}
                            <h2 style={{ color: "16436f" }}>
                              contact@shreejipharma.com
                            </h2>
                          </li>
                          <br />

                          <li className="support-box custom-border1">
                            {/* <div className="icon-box"> */}
                            {/* <i className="flaticon-dial-pad"></i> */}
                            {/* </div> */}
                            <h2 style={{ color: "16436f" }}>+918866002331</h2>
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
                          <h3>
                            {localStorage.getItem("description")} : Chemical
                            Name
                          </h3>
                        </div>
                        <div className="col-lg-5 col-12 text-right mt-4"></div>
                      </Row>
                    </Col>
                    <Col className="col-lg-12 col-12 mt-4">
                      <div className="table-outer product-detail-table">
                        <Table className="cart-table">
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
                  className="checkout-btn theme-btn mx-auto"
                  onClick={generatePdf}
                >
                  Download Brochure
                </button>
              </div>
            </Row>
          </Container>
        </section>

        {/* <!-- sidebar-page-container end -->
    <!-- about-section end --> */}

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
