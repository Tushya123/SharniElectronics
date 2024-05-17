import React from "react";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import Header from "../components/Header";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const countriesArray = [
  { label: "DZ", value: "ALGERIA" },
  { label: "AR", value: "ARGENTINA" },
  { label: "AU", value: "AUSTRALIA" },
  { label: "BD", value: "BANGLADESH" },
  { label: "BE", value: "BELGIUM" },
  { label: "BR", value: "BRAZIL" },
  { label: "CA", value: "CANADA" },
  { label: "CN", value: "CHINA" },
  { label: "EG", value: "EGYPT" },
  { label: "FR", value: "FRANCE" },
  { label: "DE", value: "GERMANY" },
  { label: "IN", value: "INDIA" },
  { label: "IL", value: "ISRAEL" },
  { label: "IT", value: "ITALY" },
  { label: "JP", value: "JAPAN" },
  { label: "MY", value: "MALAYSIA" },
  { label: "MX", value: "MEXICO" },
  ,
  { label: "NP", value: "NEPAL" },
  { label: "NL", value: "NETHERLANDS" },
  { label: "NZ", value: "NEW ZEALAND" },
  { label: "PH", value: "PHILIPPINES" },
  { label: "PT", value: "PORTUGAL" },
  { label: "QA", value: "QATAR" },
  { label: "ZA", value: "SOUTH AFRICA" },
  { label: "ES", value: "SPAIN" },
  { label: "SE", value: "SWEDEN" },
  { label: "CH", value: "SWITZERLAND" },
  { label: "TR", value: "TURKEY" },
  { label: "UA", value: "UKRAINE" },
  { label: "AE", value: "UNITED ARAB EMIRATES" },
  { label: "GB", value: "UNITED KINGDOM" },
  { label: "US", value: "UNITED STATES" },

];


export default function Contact() {
  const validationSchema = Yup.object().shape({
    ContactPerson: Yup.string().required("Enter Your Name!"),
    Mobile: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Enter Your Mobile Number!"),
    Email: Yup.string().email("Invalid email").required("Enter your Email Address!"),
    Country: Yup.string().required("Enter Country!"),
    Message: Yup.string().required("Enter your Message!"),
  });

  const initialValues = {
    ContactPerson: "",
    Mobile: "",
    Email: "",
    Country: "",
    Message: "",
  };

  const handleRegister = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/create/contactinquiry`,
        values
      );
      if (response) {
        alert("Your application has been submitted successfully!");
        resetForm();
      } else {
        alert("Application submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Application submission error:", error);
      alert("Application submission failed. Please try again.");
    }
  };

  return (
    <React.Fragment style={{ position: "relative", minHeight: "100%", top: "0px" }}>
      <div className="boxed_wrapper">
        <Header />
        {/* <!-- page-title --> */}
        <section className="page-title">
          <div className="bg-layer" style={{ backgroundImage: `url(${Background})` }}></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>Contact</h1>
              <ul className="bread-crumb clearfix">
                <li><a href="/">Home</a></li>
                <li>Contact</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- page-title end -->
        <!-- contact-info-section --> */}
        <section className="contact-info-section">
          <div className="auto-container">
            <div className="lower-box">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                  <div className="single-item">
                    <div className="icon-box">
                      <i className="flaticon-pin"></i>
                    </div>
                    <h3>Location</h3>
                    <p>311, Atlantis Heights, Sarabhai Main Road, Vadiwadi, Vadodara - 390 007</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                  <div className="single-item">
                    <div className="icon-box">
                      <i className="flaticon-phone-call-1"></i>
                    </div>
                    <h3><a href="tel:+91 8866002331">+91 8866002331</a></h3>
                    <p>Mon to Sat: 10.00am to 6.00pm <br /> Sunday: Closed</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                  <div className="single-item">
                    <div className="icon-box">
                      <i className="flaticon-message"></i>
                    </div>
                    <h3>
                      <i className="flaticon-dial-pad"></i>
                      <a href="mailto:contact@shreejipharma.com">contact@shreejipharma.com</a>
                    </h3>
                    <h3>
                      <i className="fa-brands fa-skype"></i>
                      <a href="skype:Nilesh.sheth70?Call">Nilesh.sheth70</a>
                    </h3>
                    <h3>
                      <i className="fa-brands fa-whatsapp"></i>
                      <a href="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -" target="_blank">
                        +91 8866002331
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- contact-info-section end -->
        <!-- contact-section --> */}
        <section className="contact-section sec-pad centred">
          <div className="auto-container">
            <div className="row clearfix justify-content-center">
              <div className="col-xl-6 col-lg-12 col-md-12 inner-column">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10372.815643465836!2d73.16075495016815!3d22.317465242314196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6c89cabb19%3A0xf803cbcf27adf1aa!2sShreeji%20Pharma%20International!5e0!3m2!1sen!2sin!4v1713952635837!5m2!1sen!2sin"
                  style={{ border: 0, width: "100%", height: 700 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 inner-column">
                <div className="inner-box">
                  <div className="sec-title">
                    <span className="sub-title">Send a Message</span>
                    <h2>Drop a line &amp; get a reply <br /> from our team</h2>
                  </div>
                  <div className="form-inner">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={(values, actions) => {
                        handleRegister(values, actions);
                      }}
                    >
                      {({ errors, touched, isSubmitting }) => (
                        <Form>
                          <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                              <i className="fa-solid fa-circle-user"></i>
                              <label>Name</label>
                              <Field
                                type="text"
                                name="ContactPerson"
                                placeholder="Enter your name"
                                // className={touched.ContactPerson && errors.ContactPerson ? 'error' : ''}
                                required=""
                              />
                              <ErrorMessage name="ContactPerson" component="div" className="error-message" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                              <i className="fa-solid fa-phone"></i>
                              <label>Number</label>
                              <Field
                                type="text"
                                name="Mobile"
                                placeholder="Enter your number"
                                // className={touched.Mobile && errors.Mobile ? 'error' : ''}
                                required=""
                              />
                              <ErrorMessage name="Mobile" component="div" className="error-message" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                              <i className="fa-solid fa-envelope"></i>
                              <label>Email</label>
                              <Field
                                type="email"
                                name="Email"
                                // className={touched.Email && errors.Email ? 'error' : ''}
                                required=""
                                placeholder="Enter your Email"
                              />
                              <ErrorMessage name="Email" component="div" className="error-message" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                              <label>Select Country</label>
                              <div className="select-box">
                                <Field
                                  as="select"
                                  className='nice-select selectmenu'
                                  name="Country"
                                >
                                <option value="">Select Country</option>
                                {countriesArray.map((country) => (
                                  <option
                                    key={country.label}
                                    value={country.value}
                                  >
                                    {country.value}
                                  </option>
                                ))}
                                </Field>
                                <ErrorMessage name="Country" component="div" className="error-message" />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <label>Message</label>
                              <Field
                                name="Message"
                                placeholder="Enter your message"
                                rows="3"
                                required=""
                                as="textarea"
                                className='custom-textarea '
                              ></Field>
                              <ErrorMessage name="Message" component="div" className="error-message" />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                              <button
                                type="submit"
                                className="theme-btn"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "Submitting..." : "Submit Here"}
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- contact-section end --> */}
        <div className="sticky-button">
          <a href="assets/catalogue-shreeji-pharma.pdf" target="__blank" download="">
            Download Brochure
          </a>
        </div>
        <div className="sticky-whatsapp">
          <a href="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -" target="_blank">
            <img src={wp} className="img-responsive" />
          </a>
        </div>
        <div className="sticky-skype">
          <a href="skype:Nilesh.sheth70?Call" target="_blank">
            <img src={skype} className="img-responsive" />
          </a>
        </div>
        <div className="modal fade" id="exampleModa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content custom-model-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Vadiwadi, Vadodara</h1>
                <button type="button" className="btn-close custom-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7381.956093641144!2d73.167648!3d22.31667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6c89cabb19%3A0xf803cbcf27adf1aa!2sShreeji%20Pharma%20International!5e0!3m2!1sen!2sus!4v1712310707767!5m2!1sen!2sus"
                  style={{ border: 0, width: 600, height: 450 }}
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
