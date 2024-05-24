import React, { useEffect, useState } from "react";
import logo from "../../assets/images/new-home/logo.png";
import Background from "../../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../../assets/images/new-home/footer-location-img.jpg";
import skype from "../../assets/images/new-home/skype.png";
import wp from "../../assets/images/new-home/whatsapp.png";
import news from "../../assets/images/news/news-35.jpg";
import Header from "../../components/Header";
import axios from "axios";
import banner from "../../assets/images/new-home/product-banner.jpg"
import { Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function ProductsDetails() {
  const [productDetailsss, setProductDetails] = React.useState(null);
  const [prod, setProd] = useState([]);

  React.useEffect(() => {
    const description = localStorage.getItem("description");
    axios
      .get(
        `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/get/productdetail/${description}`
      )
      .then((response) => {
        console.log("Response data", response);
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
    const images = input.getElementsByTagName("img");
    const promises = [];

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (!img.complete) {
        promises.push(new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        }));
      }
    }

    Promise.all(promises).then(() => {
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          const imgWidth = 210; // A4 width in mm
          const pageHeight = 297; // A4 height in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          pdf.save("brochure.pdf");
        })
        .catch((error) => console.error("Error generating PDF: ", error));
    });
  };

  return (
    <React.Fragment style={{ position: "relative", minHeight: "100%", top: "0px" }}>
      <div className="boxed_wrapper">
        <Header />
        <section className="page-title">
          <div className="bg-layer" style={{ backgroundImage: `url(${Background})` }}></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>Product Details</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>{localStorage.getItem("selectedProductId")}</li>
                <li>
                  {productDetailsss
                    ? productDetailsss.Description
                    : "Loading..."}
                </li>{" "}
                {/* Updated line */}
                <li><a href="index.html">Home</a></li>
                <li>Product Name</li>
                <li>Product Details</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- page-title end -->
    <!-- sidebar-page-container --> */}
        <section className="sidebar-page-container blog-details sec-pad pro-det ptb-60">
          <Container className="auto-container">
            <Row className="row clearfix">
        <section className="sidebar-page-container blog-details sec-pad pro-det">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                <div className="blog-details-content" id="pdf-content">
                  <div className="content-one row mb-0">
                    {/* <div className="col-lg-12 col-12">
                  <h2>Abacavir Sulfate</h2>
                </div> */}

                    <div className="col-lg-12 col-12">
                      <div className="row justify-content-center">
                        <div className="col-lg-12 col-12 product-image-banner">
                        <figure className="image-box">
                        {productDetailsss && (
                          <img
                            src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${productDetailsss.ImageUrl}`}
                            alt="Product"
                          />
                        )}
                      </figure>
                        </div>
                        <div className="col-lg-7 mt-4 product-name align-items-center d-flex">
                          <h3>Abacavir Sulfate : Chemical Name</h3>
                        </div>
                        <div className="col-lg-5 col-12 text-right mt-4">
                          <div className="btn-box clearfix">
                            <a
                              className="checkout-btn theme-btn"
                              href="assets/images/shreeji-pdf.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Download Brochure
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12 mt-4">
                      <div className="table-outer product-detail-table" style={{border:"1px solid #16436f"}}>
                        <Table className="cart-table">
                          <thead className="cart-header">
                            <tr style={{padding:"0px"}}>
                              <th>Name</th>
                              <th>Detail</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>IUPAC Name</td>
                              <td className="prod-column">
                                <h5>
                                  2-[2-[2-[(2,6-dichlorophenyl)amino]phenyl]acetyl]oxyacetic
                                  acid
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td>CAS Number</td>
                              <td className="prod-column">
                                <h5>89796-99-6</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>Molecular Formula</td>
                              <td className="prod-column">
                                <h5>C16H13Cl2NO4</h5>
                              </td>
                            </tr>
                            <tr>
                              <td>Synonyms</td>
                              <td className="prod-column">
                                <h5>
                                  {/* 2-(2-(2-(2,6-dichlorophenyl)aminophenyl)acetyl)oxyacetic acid; 2-((2,6-dichlorophenyl)amino)-benzeneacetic aci carboxymethyl ester; [({2-[(2,6-dichlorophenyl)amino]phenyl}acetyl)oxy]acetic acid */}
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td>Application</td>
                              <td className="prod-column">
                                <h5>Relief of pain and inflammation</h5>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>

                    {/* <div className="col-lg-12 col-12 mt-3">
                  <div className="table-outer product-detail-table">
                    <table className="cart-table">
                      <thead className="cart-header">
                        <tr>
                          <th>Name</th>
                          <th>Detail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>IUPAC Name</td>
                          <td className="prod-column">
                            <h5>2-[2-[2-[(2,6-dichlorophenyl)amino]phenyl]acetyl]oxyacetic acid</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>CAS Number</td>
                          <td className="prod-column">
                            <h5>89796-99-6</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>Molecular Formula</td>
                          <td className="prod-column">
                            <h5>C16H13Cl2NO4</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>Synonyms</td>
                          <td className="prod-column">
                            <h5>2-(2-(2-(2,6-dichlorophenyl)aminophenyl)acetyl)oxyacetic acid; 2-((2,6-dichlorophenyl)amino)-benzeneacetic aci carboxymethyl ester; [({2-[(2,6-dichlorophenyl)amino]phenyl}acetyl)oxy]acetic acid</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>Application</td>
                          <td className="prod-column">
                            <h5>Relief of pain and inflammation</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
                    </div>
                    <div className="col-lg-6 col-12">
                      <h2>
                        {productDetailsss ? productDetailsss.Description : "Loading..."}
                      </h2>
                      <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Product Key</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Product Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productDetailsss &&
                            productDetailsss.ProductDetailDescription.map((item, index) => (
                              <tr
                                key={index}
                                style={{
                                  backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                                }}
                              >
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                  {item.ProductKey}
                                </td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                  {item.ProductValue}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* <!-- sidebar-page-container end -->
    <!-- about-section end --> */}

        <div className="sticky-button">
          <Link
            to="assets/catalogue-shreeji-pharma.pdf"
            target="__blank"
            download=""
          >
            Download Brochure
          </Link>
          <button onClick={generatePdf}>Download Brochure</button>
        </div>
        <div className="sticky-whatsapp">
          <Link
            to="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wp} className="img-responsive" />
          </Link>
            <img src={wp} className="img-responsive" alt="WhatsApp" />
          </a>
        </div>
        <div className="sticky-skype">
          <Link to="skype:Nilesh.sheth70?Call" target="_blank">
            <img src={skype} className="img-responsive" />
          </Link>
          <a href="skype:Nilesh.sheth70?Call" target="_blank" rel="noopener noreferrer">
            <img src={skype} className="img-responsive" alt="Skype" />
          </a>
        </div>
        <div className="modal fade" id="exampleModa" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content custom-model-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Vadiwadi, Vadodara</h1>
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
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <button className="scroll-top scroll-to-target" data-target="html">
          <i className="flaticon-up-arrow"></i>
        </button>
      </div>
    </React.Fragment>
  );
}
