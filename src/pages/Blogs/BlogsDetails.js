import React, { useState, useEffect } from "react";
import Background from "../../assets/images/new-home/breadcrumb-img.jpg";
import skype from "../../assets/images/new-home/skype.png";
import wp from "../../assets/images/new-home/whatsapp.png";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Preloader from "../../components/PreLoader";

export default function BlogsDetails() {
  const [Blogs, setBlogs] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

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
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Blog`
        );
        console.log("Data:", response);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true); // Start loading
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/get/Blog/${id}`
        );
        setBlog(response.data);
        setIsLoading(false); // Stop loading after data is fetched
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setIsLoading(false); // Stop loading on error
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return <Preloader />;
  }

  if (!blog) {
    return <div>No blog data available</div>;
  }

  return (
    <React.Fragment style={{ position: "relative", minHeight: "100%", top: "0px" }}>
      <div className="boxed_wrapper">
        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <Container className="auto-container">
            <div className="content-box">
              <h1>{blog.Category}</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li><Link to="/">Blog</Link></li>
                {/* <li>{blog.Category}</li> */}
              </ul>
            </div>
          </Container>
        </section>
        <section className="sidebar-page-container blog-details sec-pad">
          <Container className="auto-container">
            <Row className="clearfix">
              <Col lg={8} md={12} sm={12} className="content-side">
                <div className="blog-details-content">
                  <div className="content-one">
                    <figure className="image-box">
                      <img
                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${blog.BlogImage}`}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="content-four pb-5">
                    <h2>{blog.Category}</h2>
                    <span style={{ width: "300px" }}>
                      {React.createElement("div", {
                        dangerouslySetInnerHTML: { __html: blog.Description },
                      })}
                    </span>
                    <p></p>
                    <h4>{blog.Title}</h4>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} sm={12} className="sidebar-side">
                <div className="blog-sidebar">
                  <div className="sidebar-widget category-widget">
                    <div className="widget-title">
                      <h3>Blogs</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="category-list clearfix">
                        {Blogs.map((blog) => (
                          <li key={blog._id}>
                            <Link to={`/blogdetails/${blog._id}`}>
                              {blog.Category}
                              <i className="flaticon-right-arrow"></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
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
