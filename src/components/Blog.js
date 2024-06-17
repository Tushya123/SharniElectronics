import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Container, Figure, Row } from "react-bootstrap";

export default function Blog() {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Blog`
        );
        console.log("Data:", response);
        const activeCertificates = response.data.filter(
          (Blog) => Blog.IsActive
        );
        setBlogs(activeCertificates);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  const firstBlogId = Blogs.length > 0 ? Blogs[0]._id : null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <React.Fragment>
      <section className="blog-grid news-style-two py-5">
        <Container>
          <div className="sec-title">
            <span className="sub-title">Blog</span>
            <div className="blog">
              <h2>Explore our latest Blog</h2>
              <div className="btn-box">
                <button href="#" className="theme-btn bn">
                  <Link
                    style={{ color: "white" }}
                    to={`/blogdetails/${firstBlogId}`}
                  >
                    View Blog
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <Row className="clearfix">
            {Blogs.map((blog, index) => (
              <Col
                lg={6}
                md={6}
                sm={12}
                className="mb-4"
                key={index}
                style={{ paddingRight: "0px" }}
              >
                <div className="news-block-one wow fadeInUp animated">
                  <div className="inner-box">
                    <div className="image-box position-relative">
                      <Figure className="image mb-0">
                        <img
                          src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${blog.BlogImage}`}
                          alt={blog.Title}
                          className="img-fluid"
                        />
                      </Figure>
                      <div className="link-btn position-absolute">
                        <Link to={`/blogdetails/${blog._id}`}>
                          <i className="flaticon-zoom-in"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="lower-content p-3">
                      <div className="category mb-2">
                        <a>{blog.Category}</a>
                      </div>
                      <ul className="post-info list-unstyled d-flex mb-2">
                        <li className="me-3">{formatDate(blog.createdAt)}</li>
                      </ul>
                      <h3 className="mb-3">
                        <Link>{blog.Title}</Link>
                      </h3>
                      <div className="lower-box">
                        <div className="link">
                          <Link to={`/blogdetails/${blog._id}`}>Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            <div className="btn-box">
              <button href="#" className="theme-btn btn">
                <Link
                  style={{ color: "white" }}
                  to={`/blogdetails/${firstBlogId}`}
                >
                  View Blog
                </Link>
              </button>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
