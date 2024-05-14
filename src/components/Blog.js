import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

export default function Blog() {
  const [Blogs, setBlogs] = useState([]);

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

  return (
    <>
      <section className="blog-grid news-style-two sec-pad sec-pad1">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">Blogs</span>
            <h2>Explore our latest blogs</h2>
            <div className="btn-box">
              <Link to="/blogs" className="theme-btn">
                View All Blogs
              </Link>
            </div>
          </div>
          <div className="row clearfix">
            {Blogs.map((blog, index) => (
              <div
                className="col-lg-6 col-md-6 col-sm-12 news-block"
                key={index}
              >
                <div className="news-block-one wow fadeInUp animated animated">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${blog.BlogImage}`}
                        />
                      </figure>
                      <div className="link-btn">
                        <Link to={`/blog/${blog.id}`}>
                          <i className="flaticon-zoom-in"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="category">
                        <a href="">{blog.Category}</a>
                      </div>
                      <ul className="post-info clearfix">
                        <li>{blog.date}</li>
                      </ul>
                      <h3>
                        <a href={`/blog/${blog.id}`}>{blog.Title}</a>
                      </h3>
                      <div className="lower-box">
                        <div className="link">
                          <a href={`/blog/${blog.id}`}>Read More</a>
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
    </>
  );
}
