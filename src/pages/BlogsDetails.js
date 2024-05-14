import React, { useState, useEffect } from "react";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import shap10 from "../assets/images/shape/shape-10.png";
import Header from "../components/Header";
import axios from "axios";

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/GalleryPhoto`
        );
        console.log("Gallery Data:", response);
        setGalleryData(response.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

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
              <h1>Blog Name</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index.html">Home</a>
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
                      <img src="assets/images/news/news-35.jpg" alt="" />
                    </figure>
                  </div>
                  <div class="content-four pb-5">
                    <h2>Title Here</h2>
                    <p>
                      Text Here...Text Here...Text Here...Text Here...Text
                      Here...Text Here...Text Here...Text Here...Text
                      Here...Text Here... Text Here...Text Here...Text
                      Here...Text Here...Text Here...Text Here...Text
                      Here...Text Here...Text Here...Text Here...
                    </p>

                    <p>
                      Text Here...Text Here...Text Here...Text Here...Text
                      Here...Text Here...Text Here...Text Here...Text
                      Here...Text Here...
                    </p>
                    <h4>Title Here...Title Here</h4>
                    <ul class="list-item clearfix">
                      <li>Text Here...Text Here...Text Here...</li>
                      <li>Text Here...Text Here...Text Here...</li>
                      <li>Text Here...Text Here...Text Here...</li>
                    </ul>
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
