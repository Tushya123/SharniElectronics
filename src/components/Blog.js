import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for navigation
import { Container } from "react-bootstrap";

export default function Blog() {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Blog`
        );
        console.log("Data:", response);
        const activeCertificates = response.data.filter(Blog => Blog.IsActive);
        setBlogs(activeCertificates);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  const firstBlogId = Blogs.length > 0 ? Blogs[0]._id : null;


  return (
    <React.Fragment>
    <section className="blog-grid news-style-two sec-pad sec-pad1">
      <Container className="auto-container">
        <div className="sec-title">
          <span className="sub-title">Blogs</span>
          <h2>Explore our latest blogs</h2>
          {firstBlogId && (
            <div className="btn-box">
              <Link to={`/blogdetails/${firstBlogId}`} className="theme-btn">
                View Blog Details
              </Link>
            </div>
          )}
        </div>
        <div className="row clearfix">
          {Blogs.map((blog, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12 news-block" key={index}>
              <div className="news-block-one wow fadeInUp animated animated">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${blog.BlogImage}`}
                        alt={blog.Title}
                      />
                    </figure>
                    <div className="link-btn">
                    <Link to={`/blogdetails/${blog._id}`} key={index}>
                        <i className="flaticon-zoom-in"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <div className="category">
                      <Link to={`/blogdetails/${blog._id}`}>{blog.Category}</Link>
                    </div>
                    <ul className="post-info clearfix">
                      <li>{blog.date}</li>
                    </ul>
                    <h3>
                      <Link to={`/blogdetails/${blog._id}`}>{blog.Title}</Link>
                    </h3>
                    <div className="lower-box">
                      <div className="link">
                        <Link to={`/blogdetails/${blog._id}`}>Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
    </React.Fragment>
  );
}
