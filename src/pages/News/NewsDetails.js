import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Modal,
  Button,
  Figure,
} from "react-bootstrap";
import Background from "../../assets/images/new-home/breadcrumb-img.jpg";
import skype from "../../assets/images/new-home/skype.png";
import wp from "../../assets/images/new-home/whatsapp.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Preloader from "../../components/PreLoader";

export default function NewsDetails() {
  const [Blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Start loading

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Blog`
        );
        setBlogs(response.data);
        setIsLoading(false); // Stop loading after data is fetched

      } catch (error) {
        console.error("Error fetching product data:", error);
        setIsLoading(false); // Stop loading on error

      }
    };

    fetchData();
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/get/Newsletter/${id}`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching Blogs data:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return <Preloader />;
  }

  if (!Blogs) {
    return <div>No blog data available</div>;
  }

  return (
    <div className="boxed_wrapper">
    
      <section className="page-title">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
        <Container>
          <div className="content-box">
            <h1>{Blogs.Title}</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>News</li>
              {/* <li>{Blogs.Title}</li> */}
            </ul>
          </div>
        </Container>
      </section>
      <section className="sidebar-page-container Blogs-details sec-pad">
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12} className="content-side">
              <div className="Blogs-details-content">
                <div className="content-one">
                  <Figure className="image-box">
                    <Image
                      src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${Blogs.NewsletterImage}`}
                      alt=""
                      fluid
                    />
                  </Figure>
                </div>
                <div className="content-four pb-5">
                  <h2>{Blogs.Title}</h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: Blogs.Description }}
                  />
                </div>
              </div>
            </Col>
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
          <Image src={wp} className="img-responsive" />
        </Link>
      </div>
      <div className="sticky-skype">
        <Link to="skype:Nilesh.sheth70?Call" target="_blank">
          <Image src={skype} className="img-responsive" />
        </Link>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Vadiwadi, Vadodara</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7381.956093641144!2d73.167648!3d22.31667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6c89cabb19%3A0xf803cbcf27adf1aa!2sShreeji%20Pharma%20International!5e0!3m2!1sen!2sus!4v1712310707767!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Modal.Body>
      </Modal>

      <button
        className={`scroll-top scroll-to-target ${isVisible ? "open" : ""}`}
        onClick={scrollToTop}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <i className="flaticon-up-arrow"></i>
      </button>
    </div>
  );
}
