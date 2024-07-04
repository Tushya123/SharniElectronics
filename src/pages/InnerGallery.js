import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import { useParams } from "react-router-dom";
import Stickey from "../../src/components/Stickey";
import axios from "axios";

export default function ImageView() {
  const location = useLocation();
  const { galleryData } = location.state;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const navigate = useNavigate();
  const ID = useParams();
  console.log("ID", galleryData);
  const handleClose = () => {
    navigate(-1);
  };
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const handleZoomInClick = (imageURL) => {
    setSelectedGalleryImage(imageURL);
  };

  const closeModal = () => {
    setSelectedGalleryImage(null);
  };
  const [categories, setCategories] = useState([]);
  const loadDrinkCategories = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/Category`
      )
      .then((response) => {
        if (response.data.length > 0) {
          console.log("cc", response.data);
          setCategories(response.data);
        }
      });
  };

  useEffect(() => {
    loadDrinkCategories();
  }, []);

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

  return (
    <React.Fragment>
      <Stickey />
      <div className="boxed_wrapper">
        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <Container>
            <div className="content-box">
              {categories
                .filter((type) => type._id === ID.index)
                .map((item, index) => (
                  <>
                    <div key={index} className="mb-3">
                      <h1>{item.Category}</h1>
                    </div>
                  </>
                ))}
              {/* <h1>{item.Category}</h1> */}
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </Container>
        </section>
        <section className="service-details sec-pad">
          <Container>
            {/* <Col md={4}> */}
            <div className="service-details-content">
              <div className="content-five">
                <button onClick={handleClose}></button>
                {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      overflowX: "auto",
                    }}
                    > */}
                <Row>
                  {galleryData
                    .filter((type) => type.Category === ID.index)
                    .map((item, index) => (
                      <>
                        <Col md={4} key={index} className="mb-3">
                          <div className="overlay-content">
                            <div className="image-box">
                              <Image
                                src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                                alt={item.Category}
                                className="img-fluid"
                                // onClick={() => {
                                //   setLightboxOpen(true);
                                //   setLightboxIndex(index);
                                // }}
                                // onClick={() => handleZoomInClick(item.imageURL)}
                                style={{ cursor: "pointer" }}
                              />

                              {/* <div className="view-btn">
                                <Button
                                  variant="link"
                                  onClick={() =>
                                    handleZoomInClick(item.imageURL)
                                  }
                                >
                                  <i
                                    className="flaticon-zoom-in"
                                    // style={{ color: "white" }}
                                  ></i>
                                </Button>
                              </div> */}
                            </div>
                          </div>
                        </Col>
                      </>
                    ))}
                </Row>

                {/* </div> */}
              </div>
            </div>
            {/* </Col> */}
          </Container>
        </section>

        {/* <Modal show={!!selectedGalleryImage} onHide={closeModal}>
          <Modal.Header closeButton />
          <Modal.Body>
            {selectedGalleryImage && (
              <Image
                src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${selectedGalleryImage}`}
                style={{ width: "100%" }}
                fluid
              />
            )}
          </Modal.Body>
        </Modal> */}

        {lightboxOpen && (
          <Lightbox
            mainSrc={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${galleryData[lightboxIndex].imageURL}`}
            nextSrc={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${
              galleryData[(lightboxIndex + 1) % galleryData.length].imageURL
            }`}
            prevSrc={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${
              galleryData[
                (lightboxIndex + galleryData.length - 1) % galleryData.length
              ].imageURL
            }`}
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() =>
              setLightboxIndex(
                (lightboxIndex + galleryData.length - 1) % galleryData.length
              )
            }
            onMoveNextRequest={() =>
              setLightboxIndex((lightboxIndex + 1) % galleryData.length)
            }
          />
        )}

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
