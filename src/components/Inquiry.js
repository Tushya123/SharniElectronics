import React from "react";
import booking from "../assets/images/background/booking-bg.jpg";
import shape7 from "../assets/images/shape/shape-7.png";
import shape8 from "../assets/images/shape/shape-8.png";
import shape9 from "../assets/images/shape/shape-9.png";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";

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
  const validationSchema = Yup.object().shape({
    ContactPerson: Yup.string().required("Enter Your Name!"),
    Mobile: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Enter Your Mobile Number!"),
    Email: Yup.string()
      .email("Invalid email")
      .required("Enter Your Email Address!"),
    Country: Yup.string().required("Pls Select Your Country!"),
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
    <React.Fragment>
      <section className="booking-section sec-pad">
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
        <Container>
          <Row className="custom-form">
            <Col lg={5} md={12} sm={12} className="content-column">
              <div className="content-box">
                <span className="rotate-text">contact us</span>
                <div
                  className="shape"
                  style={{ backgroundImage: `url(${shape9})` }}
                ></div>
                <div className="sec-title light">
                  <span className="sub-title">Inquiry Now</span>
                  <h2>Get your solution by contact us we'll reach you soon . </h2>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="inner-column">
              <div className="inner-content">
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
                        <Row>
                          <Col lg={6} md={12} sm={12} className="form-group">
                            <i className="fa-solid fa-circle-user"></i>
                            <label>Name</label>
                            <Field
                              type="text"
                              name="Name"
                              placeholder="Enter your name"
                              autoCapitalize="none" 
                              autoCorrect="off"
                              spellCheck="false"
                              className={`form-control ${
                                touched.ContactPerson && errors.ContactPerson
                                  ? "is-invalid"
                                  : ""
                              }`}
                              required
                            />
                            <ErrorMessage
                              name="ContactPerson"
                              component="div"
                              className="invalid-feedback"
                            />
                          </Col>
                          <Col lg={6} md={12} sm={12} className="form-group">
                            <i className="fa-solid fa-phone"></i>
                            <label>Number</label>
                            <Field
                              type="text"
                              name="Mobile"
                              placeholder="Enter your number"
                              className={`form-control ${
                                touched.Mobile && errors.Mobile
                                  ? "is-invalid"
                                  : ""
                              }`}
                              required
                            />
                            <ErrorMessage
                              name="Mobile"
                              component="div"
                              className="invalid-feedback"
                            />
                          </Col>
                          <Col lg={6} md={12} sm={12} className="form-group">
                            <i className="fa-solid fa-envelope"></i>
                            <label>Email</label>
                            <Field
                              type="email"
                              name="Email"
                              placeholder="Enter your Email"
                              className={`form-control ${
                                touched.Email && errors.Email
                                  ? "is-invalid"
                                  : ""
                              }`}
                              required
                            />
                            <ErrorMessage
                              name="Email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </Col>
                          <Col lg={6} md={12} sm={12} className="form-group">
                            <label>Select Country</label>
                            <div className="select-box">
                              <Field
                                as="select"
                                name="Country"
                                className={`form-control ${
                                  touched.Country && errors.Country
                                    ? "is-invalid"
                                    : ""
                                }`}
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
                              <ErrorMessage
                                name="Country"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </Col>
                          <Col lg={12} md={12} sm={12} className="form-group">
                            <label>Message</label>
                            <Field
                              name="Message"
                              as="textarea"
                              rows="3"
                              placeholder="Enter your message"
                              className={`form-control ${
                                touched.Message && errors.Message
                                  ? "is-invalid"
                                  : ""
                              }`}
                              required
                            />
                            <ErrorMessage
                              name="Message"
                              component="div"
                              className="invalid-feedback"
                            />
                          </Col>
                          <Col
                            lg={12}
                            md={12}
                            sm={12}
                            className="form-group message-btn"
                          >
                            <Button
                              type="submit"
                              className="theme-btn"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Submitting..." : "Submit Here"}
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
