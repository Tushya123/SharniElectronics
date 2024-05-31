  import React, { useState } from "react";
  import booking from "../assets/images/background/booking-bg.jpg";
  import shape7 from "../assets/images/shape/shape-7.png";
  import shape8 from "../assets/images/shape/shape-8.png";
  import shape9 from "../assets/images/shape/shape-9.png";
  import axios from "axios";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { Container, Row, Col } from "react-bootstrap";

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

  export default function Inquiry() {
    const [formData, setFormData] = useState({
      ContactPerson: "",
      Mobile: "",
      Email: "",
      Country: "",
      Message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const validateForm = () => {
      let formErrors = {};
      if (!formData.ContactPerson) formErrors.ContactPerson = "Enter Your Name!";
      if (!formData.Mobile) {
        formErrors.Mobile = "Enter Your Mobile Number!";
      } else if (!/^\d{10}$/.test(formData.Mobile)) {
        formErrors.Mobile = "Invalid phone number";
      }
      if (!formData.Email) {
        formErrors.Email = "Enter Your Email Address!";
      } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
        formErrors.Email = "Invalid email";
      }
      if (!formData.Country) formErrors.Country = "Pls Select Your Country!";
      if (!formData.Message) formErrors.Message = "Enter your Message!";
      return formErrors;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }
      setErrors({});
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/create/contactinquiry`,
          formData
        );
        if (response) {
          toast.success("Your application has been submitted successfully!");
          setFormData({
            ContactPerson: "",
            Mobile: "",
            Email: "",
            Country: "",
            Message: "",
          });
        } else {
          toast.error("Application submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Application submission error:", error);
        toast.error("Application submission failed. Please try again.");
      }
    };

    return (
      <section className="booking-section sec-pad">
        <ToastContainer />

        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${booking})` }}
        ></div>
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: `url(${shape7})` }}
          ></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: `url(${shape8})` }}
          ></div>
        </div>
        <Container className="auto-container">
          <Row className="clearfix custom-form">
            <Col lg={5} md={12} sm={12} className="content-column">
              <div className="content-box">
                <span className="rotate-text">contact us</span>
                <div
                  className="shape"
                  style={{ backgroundImage: `url(${shape9})` }}
                ></div>
                <div className="sec-title light">
                  <span className="sub-title">Inquiry Now</span>
                  <h2>Get your solution by contact us we'll reach you soon</h2>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="inner-column">
              <div className="inner-content">
                <div className="form-inner">
                  <form onSubmit={handleSubmit}>
                    <Row className="clearfix">
                      <Col lg={6} md={12} sm={12} className="form-group">
                        <i className="fa-solid fa-circle-user"></i>
                        <label>Name</label>
                        <input
                          type="text"
                          name="ContactPerson"
                          placeholder="Enter your name"
                          value={formData.ContactPerson}
                          onChange={handleChange}
                          className={errors.ContactPerson ? "error" : ""}
                          required=""
                        />
                        {errors.ContactPerson && (
                          <div className="error-message">
                            {errors.ContactPerson}
                          </div>
                        )}
                      </Col>
                      <Col lg={6} md={12} sm={12} className="form-group">
                        <i className="fa-solid fa-phone"></i>
                        <label>Number</label>
                        <input
                          type="text"
                          name="Mobile"
                          placeholder="Enter your number"
                          value={formData.Mobile}
                          onChange={handleChange}
                          className={errors.Mobile ? "error" : ""}
                          required=""
                        />
                        {errors.Mobile && (
                          <div className="error-message">{errors.Mobile}</div>
                        )}
                      </Col>
                      <Col lg={6} md={12} sm={12} className="form-group">
                        <i className="fa-solid fa-envelope"></i>
                        <label>Email</label>
                        <input
                          type="email"
                          name="Email"
                          required=""
                          placeholder="Enter your Email"
                          value={formData.Email}
                          onChange={handleChange}
                          className={errors.Email ? "error" : ""}
                        />
                        {errors.Email && (
                          <div className="error-message">{errors.Email}</div>
                        )}
                      </Col>
                      <Col lg={6} md={12} sm={12} className="form-group">
                        <label>Select Country</label>
                        <div className="select-box">
                          <select
                            className={`nice-select selectmenu ${
                              errors.Country ? "error" : ""
                            }`}
                            name="Country"
                            value={formData.Country}
                            onChange={handleChange}
                          >
                            <option value="">Select Country</option>
                            {countriesArray.map((country) => (
                              <option key={country.label} value={country.value}>
                                {country.value}
                              </option>
                            ))}
                          </select>
                          {errors.Country && (
                            <div className="error-message">{errors.Country}</div>
                          )}
                        </div>
                      </Col>
                      <Col lg={12} md={12} sm={12} className="form-group">
                        <label>Message</label>
                        <textarea
                          name="Message"
                          placeholder="Enter your message"
                          rows="3"
                          value={formData.Message}
                          onChange={handleChange}
                          className={`custom-textarea ${
                            errors.Message ? "error" : ""
                          }`}
                          required=""
                        ></textarea>
                        {errors.Message && (
                          <div className="error-message text-area">{errors.Message}</div>
                        )}
                      </Col>
                      <Col lg={12} md={12} sm={12} className="full">
                        <button
                          type="submit"
                          className="theme-btn resp-width"
                          // style={{width:"100%"}}
                        >
                          Submit Here
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
