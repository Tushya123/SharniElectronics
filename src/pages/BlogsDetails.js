import React, { useState, useEffect } from "react";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import news from "../assets/images/news/news-35.jpg";
import wp from "../assets/images/new-home/whatsapp.png";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlogsDetails() {
  const { id } = useParams();
  console.log(id, "avaniid");
  const [blog, setBlog] = useState(null);
  console.log(blog, "blog");
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/get/Blog/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <React.Fragment
      style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <div className="boxed_wrapper">
        <Header />
        {/* <!-- page-title -->  */}
        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>{blog.Name}</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Blog</li>
                <li>Blog Name</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- page-title end -->
      <!-- service-details --> */}
        <section class="sidebar-page-container blog-details sec-pad">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                <div class="blog-details-content">
                  <div class="content-one">
                    <figure class="image-box">
                      <img
                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${blog.BlogImage}`}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div class="content-four pb-5">
                    <h2>{blog.Category}</h2>
                    {
                      <span style={{ width: "300px" }}>
                        {React.createElement("div", {
                          dangerouslySetInnerHTML: { __html: blog.Description },
                        })}
                      </span>
                    }
                    <p></p>
                    <h4>{blog.Title}</h4>
                    {/* <ul class="list-item clearfix">
                      <li>Text Here...Text Here...Text Here...</li>
                      <li>Text Here...Text Here...Text Here...</li>
                      <li>Text Here...Text Here...Text Here...</li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div class="blog-sidebar">
                  <div class="sidebar-widget category-widget">
                    <div class="widget-title">
                      <h3>Blogs</h3>
                    </div>
                    <div class="widget-content">
                      <ul class="category-list clearfix">
                        <li>
                          <a href="blog-details.html">
                            Blog Title...Blog Title
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Blog Title...Blog Title
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Blog Title...Blog Title
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Blog Title...Blog Title
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Blog Title...Blog Title
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </li>
                        <li>
                          <a href="blog-details.html">
                            Blog Title...Blog Title
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- service-details end -->
    <!-- locations-section --> */}

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
      </div>
    </React.Fragment>
  );
}
