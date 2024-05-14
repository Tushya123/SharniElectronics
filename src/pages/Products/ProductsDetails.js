import React from "react";
import logo from "../../assets/images/new-home/logo.png";
import Background from "../../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../../assets/images/new-home/footer-location-img.jpg";
import skype from "../../assets/images/new-home/skype.png";
import wp from "../../assets/images/new-home/whatsapp.png";
import news from "../../assets/images/news/news-35.jpg";
import Header from "../../components/Header";

export default function ProductsDetails() {
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
              <h1>Product Deatils</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Product Name</li>
                <li>Product Details</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- page-title end -->
    <!-- sidebar-page-container --> */}
        <section class="sidebar-page-container blog-details sec-pad pro-det">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="col-lg-12 col-md-12 col-sm-12 content-side">
                <div class="blog-details-content">
                  <div class="content-one row mb-0">
                    <div class="col-lg-6 col-12">
                      <figure class="image-box">
                        <img src={news} alt="" />
                      </figure>
                    </div>

                    <div class="col-lg-6 col-12">
                      <h2>Title Here</h2>
                      <p class="mb-3">
                        Text Soon...Text Soon...Text Soon...Text Soon...Text
                        Soon...Text Soon... Text Soon...Text Soon...Text
                        Soon...Text Soon...Text Soon...Text Soon... Text
                        Soon...Text Soon...Text Soon...Text Soon...Text
                        Soon...Text Soon... Text Soon...Text Soon...Text
                        Soon...Text Soon...Text Soon...Text Soon... Text
                        Soon...Text Soon...Text Soon...Text Soon...Text
                        Soon...Text Soon...
                      </p>
                      <p class="mb-3">
                        Text Soon...Text Soon...Text Soon...Text Soon...Text
                        Soon...Text Soon... Text Soon...Text Soon...Text
                        Soon...Text Soon...Text Soon...Text Soon... Text
                        Soon...Text Soon ...Text Soon...Text Soon...Text
                        Soon...Text Soon... Text Soon...Text Soon...Text
                        Soon...Text Soon...Text Soon...Text Soon...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- sidebar-page-container end -->
    <!-- about-section end --> */}

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
