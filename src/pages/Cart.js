import React, { useState } from "react";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import pillicon from "../assets/images/new-home/pill-icon.png";
import Header from "../components/Header";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(localStorage.getItem("productIds"))

  return (
    <>
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
                <h1>Cart</h1>
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Cart</li>
                  <li>Cart</li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!-- page-title end -->


        {/* Modal */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Make Inquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-body">
                <div className="contact-section">
                  <div className="form-inner">
                    <form id="contact-form">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Contact Person</label>
                          <input
                            type="text"
                            name="username"
                            placeholder="Contact Person"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Company Name</label>
                          <input
                            type="text"
                            name="email"
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                          />
                        </div>
                        {/* <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Fax</label>
                          <input
                            type="number"
                            name="fax"
                            placeholder="Fax"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Mobile</label>
                          <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile"
                          />
                        </div> */}
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        {/* <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Address</label>
                          <textarea
                            name="address"
                            placeholder="Address"
                            rows="1"
                          ></textarea>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Reference</label>
                          <textarea
                            name="reference"
                            placeholder="Reference"
                            rows="1"
                          ></textarea>
                        </div> */}
                        <div className="col-lg-8 col-md-6 col-sm-12 form-group">
                          <label>Comments</label>
                          <textarea
                            name="comments"
                            placeholder="Comments"
                            rows="1"
                          ></textarea>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 form-group message-btn text-center align-content-center">
                          <button
                            type="submit"
                            className="theme-btn"
                            data-bs-dismiss="modal"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* <!-- banner-section end -->
    <!--cart section--> */}
          <section class="cart-section">
            <div class="auto-container">
              <div class="cart-outer">
                <div class="totle-table clearfix">
                  <div class="item pull-left">
                    <p>Your Cart: 1 Items</p>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="col-lg-8 col-md-12 col-sm-12 column clearfix">
                    <div class="table-outer">
                      <table class="cart-table">
                        <thead class="cart-header">
                          <tr>
                            <th>Sr. No</th>
                            <th>Your Product</th>
                            <th>Quantity</th>
                            {/* <!-- <th class="price">Price</th>
                                    <th>Total</th> --> */}
                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td class="prod-column">
                              <h5>Product Name Here</h5>
                            </td>
                            <td class="prod-column">
                              <h5>200</h5>
                            </td>
                            {/* <!-- <td class="sub-total">1545 Rs.</td>
                                    <td class="total-price">1545 Rs</td> --> */}
                            <td>
                              <a href="#" class="remove-btn">
                                <i class="fa-solid fa-xmark"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 column clearfix center-btn align-content-center">
                    <div class="btn-box clearfix">
                      <button
                        type="button"
                        class="checkout-btn theme-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#inquiryModal"
                        onClick={handleShow}
                      >
                        Make Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--cart section end--> */}

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
    </>
  );
}
