import React from "react";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import free from "../assets/images/new-home/free-delivery.png";
import statuss from "../assets/images/new-home/transit-status.png"
import sample from "../assets/images/new-home/sample-icon.png"
import spot from "../assets/images/new-home/spot-response.png"
import certification from "../assets/images/new-home/certifcation.png"
import Header from "../components/Header";

export default function Commitment() {
  return (
    
      <React.Fragment style={{ position: "relative", minHeight: "100%", top: "0px" }}>
        <div className="boxed_wrapper">
          <Header/>
       {/* <!-- page-title -->  */}
          <section className="page-title">
            <div
              className="bg-layer"
              style={{ backgroundImage: `url(${Background})` }}
            ></div>
            <div className="auto-container">
              <div className="content-box">
                <h1>Commitment And Approach</h1>
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Commitment</li>
                  <li>Commitment</li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!-- page-title end -->
    <!-- banner-section end -->
    <!-- about-section -->
   <!-- shop-details --> */}
          <section className="shop-details commitment">
            <div className="auto-container">
              <div className="product-discription mb-0">
                <div className="customer-comment mb-0">
                  <div className="row clearfix justify-content-center">
                    <div className="col-lg-7 col-md-6 col-sm-12 comment-column">
                      <div className="single-comment-box">
                        <div className="inner-box">
                          <figure className="comment-thumb">
                            <img src={free} alt="" />
                          </figure>
                          <div className="inner">
                            <h3>In time Delivery</h3>
                            <p>
                              With years of experience, we are strictly
                              committed to offer our clients in time delivery.
                              We have studied and worked out the actual time
                              taken to deliver at various ports and airports of
                              the world. Our team commits to deliver the product
                              based on that time frame.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 comment-column">
                      <div className="single-comment-box">
                        <div className="inner-box">
                          <figure className="comment-thumb">
                            <img
                              src={statuss}
                              alt=""
                            />
                          </figure>
                          <div className="inner">
                            <h3>Transit status at fingertips</h3>
                            <p>
                              We keep a complete track record of the goods that
                              are exported and inform our clients about the
                              transit status on daily basis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 comment-column">
                      <div className="single-comment-box">
                        <div className="inner-box">
                          <figure className="comment-thumb">
                            <img
                              src={sample}
                              alt=""
                            />
                          </figure>
                          <div className="inner">
                            <h3>Samples at Free cost</h3>
                            <p>
                              We use to send free sample pieces to our clients
                              for their approval. In case of highly priced
                              products, the sample is sent to the customers if
                              they asked for.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 comment-column">
                      <div className="single-comment-box">
                        <div className="inner-box">
                          <figure className="comment-thumb">
                            <img
                              src={spot}
                              alt=""
                            />
                          </figure>
                          <div className="inner">
                            <h3>Spot response with typical COA</h3>
                            <p>
                              Our team responds to each and every queries of our
                              client's mail within a short time frame along with
                              copy of Typical Certificate of Analysis. We also
                              send a copy of specimen documents such as M.S.D.S,
                              Non hazardous etc. if demanded by the customer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                      <div className="single-comment-box">
                        <div className="inner-box">
                          <figure className="comment-thumb">
                            <img
                              src={certification}
                              alt=""
                            />
                          </figure>
                          <div className="inner">
                            <h3>Certification</h3>
                            <p>
                              Since our inception, we hold Wholesale Drugs
                              Licence from FDA , Gujarat State, India. We are
                              also registered Merchant Exporter with
                              Pharmexcil(Pharmaceutical Export Promotion
                              Council) Bombay, India.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- shop-details end -->
    <!-- about-section end -->
  
    <!-- locations-section --> */}
          <section className="locations-section sec-pad centred">
            <div
              className="pattern-layer"
              // style="background-image: url(assets/images/shape/shape-10.png);"
            ></div>
            <div className="auto-container">
              <div className="sec-title">
                <span className="sub-title">Locations</span>
                <h2>
                  Support across 50+ countries <br />
                  around the world
                </h2>
              </div>
              <div className="row clearfix justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12 location-block mt-5">
                  <div className="location-block-one">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src={footer} alt="" />
                      </figure>
                      <h6>SHREEJI PHARMA INTERNATIONAL</h6>
                      <h3>
                        311, Atlantis Heights, Sarabhai Main Road, Vadiwadi,
                        Vadodara - 390 007, Gujarat, INDIA.
                      </h3>
                      <div className="custom-info">
                        <div className="link">
                          <a href="mailto:contact@shreejipharma.com">
                            Email : contact@shreejipharma.com
                            <i className="flaticon-right-arrow"></i>
                          </a>
                        </div>
                        <div className="link">
                          <a href="tel:8866002331">
                            Contact : +91 8866002331{" "}
                            <i className="flaticon-right-arrow"></i>
                          </a>
                        </div>
                        <div className="link">
                          <a href="skype:Nilesh.sheth70?Call">
                            Skype ID: Nilesh.sheth70{" "}
                            <i className="flaticon-right-arrow"></i>
                          </a>
                        </div>
                      </div>
                      <div className="link">
                        <a
                          href="#"
                          target="_blank"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModa"
                        >
                          Locate Us <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                    style={{border:0}}
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
