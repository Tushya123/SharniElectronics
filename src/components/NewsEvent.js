import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NewsEvent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Newsletter`
        );
        console.log("Data:", response.data);
        const activeCertificates = response.data.filter(News => News.IsActive);
        setNews(activeCertificates);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <React.Fragment>
    <section className="news-section sec-pad">
      <div className="auto-container">
        <div className="sec-title">
          <span className="sub-title">News &amp; Events</span>
          <h2>Explore our latest post</h2>
          <div className="btn-box">
            <a href="#" className="theme-btn">
              View All News
            </a>
          </div>
        </div>
        <div className="row clearfix">
          {news.length > 0 ? (
            news.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 news-block"
                key={index}
              >
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.NewsletterImage}`}
                          alt={item.Title}
                        />
                      </figure>
                      <div className="link-btn">
                        <Link to={`/newsdetails/${item._id}`}>
                          <i className="flaticon-zoom-in"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="category">
                        <a href="#">Shreeji Pharma</a>
                      </div>
                      <ul className="post-info clearfix">
                        <li>{formatDate(item.createdAt)}</li>
                      </ul>
                      <h3>
                        <Link to={`/detailNews/${item._id}`}>{item.Title}</Link>
                      </h3>
                      <div className="lower-box">
                        <div className="link">
                          <Link to={`/detailNews/${item._id}`}>Read More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No news available</p>
          )}
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}
