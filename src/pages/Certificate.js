import React, { useState, useEffect } from "react";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import shap10 from "../assets/images/shape/shape-10.png";
import Header from "../components/Header";
import axios from "axios";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

export default function Certificate() {
  const [certificate, setCertificate] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Certificate`
        );
        console.log("Gallery Data:", response);
        const activeCertificates = response.data.filter(
          (certificate) => certificate.IsActive
        );
        setCertificate(activeCertificates);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  const handleZoomInClick = (certificateImage) => {
    setSelectedCertificate(certificateImage);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

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
          <div className="auto-container">
            <div className="content-box">
              <h1>Certificate</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Certificate</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- page-title end --> */}
        {/* <!-- banner-section end --> */}
        {/* <!-- service-details --> */}
        <section className="service-details sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              {certificate.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-12 project-block gallery"
                >
                  <div className="project-block-one">
                    <div className="inner-box">
                      <div className="static-content">
                        <figure className="image-box">
                          <img
                            src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.CertificateImage}`}
                          />
                        </figure>
                        <h5 className="gal-txt">{item.Title}</h5>
                      </div>
                      <div className="overlay-content">
                        <div className="image-box">
                          <figure className="image">
                            <img
                              src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.CertificateImage}`}
                              alt=""
                            />
                          </figure>
                          <h5 className="gal-txt">{item.Title}</h5>
                          <div className="view-btn">
                            <Button
                              variant="link"
                              onClick={() => handleZoomInClick(item.CertificateImage)}
                            >
                              <i className="flaticon-zoom-in"></i>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- service-details end --> */}

        {/* <!-- locations-section --> */}
        <section className="locations-section sec-pad centred">
          <div
            className="pattern-layer"
            style={{ backgroundImage: `url(${shap10})` }}
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

        {/* <!-- scroll to top --> */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <i className="flaticon-up-arrow"></i>
        </button>

        <Modal show={!!selectedCertificate} onHide={closeModal}>
          <Modal.Header closeButton>
            {/* <Modal.Title>Certificate Preview</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            {selectedCertificate && (
              <img
                src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${selectedCertificate}`}
                style={{ width: "100%" }}
              />
            )}
          </Modal.Body>
        </Modal>
      </div>
    </React.Fragment>
  );
}
