import React, { useState, useEffect } from "react";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import pillicon from "../assets/images/new-home/pill-icon.png";
import Header from "../components/Header";
import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link } from "react-router-dom";
import axios from "axios";
import { Row } from "reactstrap";
const countriesArray = [
  { label: "AX", value: "ALAND ISLANDS" },
  { label: "AL", value: "ALBANIA" },
  { label: "DZ", value: "ALGERIA" },
  { label: "AS", value: "AMERICAN SAMOA" },
  { label: "AD", value: "ANDORRA" },
  { label: "AI", value: "ANGUILLA" },
  { label: "AQ", value: "ANTARCTICA" },
  { label: "AG", value: "ANTIGUA AND BARBUDA" },
  { label: "AR", value: "ARGENTINA" },
  { label: "AM", value: "ARMENIA" },
  { label: "AW", value: "ARUBA" },
  { label: "AU", value: "AUSTRALIA" },
  { label: "AT", value: "AUSTRIA" },
  { label: "AZ", value: "AZERBAIJAN" },
  { label: "BS", value: "BAHAMAS" },
  { label: "BH", value: "BAHRAIN" },
  { label: "BD", value: "BANGLADESH" },
  { label: "BB", value: "BARBADOS" },
  { label: "BE", value: "BELGIUM" },
  { label: "BZ", value: "BELIZE" },
  { label: "BJ", value: "BENIN" },
  { label: "BM", value: "BERMUDA" },
  { label: "BT", value: "BHUTAN" },
  { label: "BA", value: "BOSNIA-HERZEGOVINA" },
  { label: "BW", value: "BOTSWANA" },
  { label: "BV", value: "BOUVET ISLAND" },
  { label: "BR", value: "BRAZIL" },
  { label: "BN", value: "BRUNEI DARUSSALAM" },
  { label: "BG", value: "BULGARIA" },
  { label: "BF", value: "BURKINA FASO" },
  { label: "CA", value: "CANADA" },
  { label: "CV", value: "CAPE VERDE" },
  { label: "KY", value: "CAYMAN ISLANDS" },
  { label: "CF", value: "CENTRAL AFRICAN REPUBLIC" },
  { label: "CL", value: "CHILE" },
  { label: "CN", value: "CHINA" },
  { label: "CX", value: "CHRISTMAS ISLAND" },
  { label: "CC", value: "COCOS (KEELING) ISLANDS" },
  { label: "CO", value: "COLOMBIA" },
  { label: "CK", value: "COOK ISLANDS" },
  { label: "CR", value: "COSTA RICA" },
  { label: "CY", value: "CYPRUS" },
  { label: "CZ", value: "CZECH REPUBLIC" },
  { label: "DK", value: "DENMARK" },
  { label: "DJ", value: "DJIBOUTI" },
  { label: "DM", value: "DOMINICA" },
  { label: "DO", value: "DOMINICAN REPUBLIC" },
  { label: "EC", value: "ECUADOR" },
  { label: "EG", value: "EGYPT" },
  { label: "SV", value: "EL SALVADOR" },
  { label: "EE", value: "ESTONIA" },
  { label: "FK", value: "FALKLAND ISLANDS (MALVINAS)" },
  { label: "FO", value: "FAROE ISLANDS" },
  { label: "FJ", value: "FIJI" },
  { label: "FI", value: "FINLAND" },
  { label: "FR", value: "FRANCE" },
  { label: "GF", value: "FRENCH GUIANA" },
  { label: "PF", value: "FRENCH POLYNESIA" },
  { label: "TF", value: "FRENCH SOUTHERN TERRITORIES" },
  { label: "GA", value: "GABON" },
  { label: "GM", value: "GAMBIA" },
  { label: "GE", value: "GEORGIA" },
  { label: "DE", value: "GERMANY" },
  { label: "GH", value: "GHANA" },
  { label: "GI", value: "GIBRALTAR" },
  { label: "GR", value: "GREECE" },
  { label: "GL", value: "GREENLAND" },
  { label: "GD", value: "GRENADA" },
  { label: "GP", value: "GUADELOUPE" },
  { label: "GU", value: "GUAM" },
  { label: "GG", value: "GUERNSEY" },
  { label: "GY", value: "GUYANA" },
  { label: "VA", value: "HOLY SEE (VATICAN CITY STATE)" },
  { label: "HN", value: "HONDURAS" },
  { label: "HK", value: "HONG KONG" },
  { label: "HU", value: "HUNGARY" },
  { label: "IS", value: "ICELAND" },
  { label: "IN", value: "INDIA" },
  { label: "ID", value: "INDONESIA" },
  { label: "IE", value: "IRELAND" },
  { label: "IM", value: "ISLE OF MAN" },
  { label: "IL", value: "ISRAEL" },
  { label: "IT", value: "ITALY" },
  { label: "JM", value: "JAMAICA" },
  { label: "JP", value: "JAPAN" },
  { label: "JE", value: "JERSEY" },
  { label: "JO", value: "JORDAN" },
  { label: "KZ", value: "KAZAKHSTAN" },
  { label: "KI", value: "KIRIBATI" },
  { label: "KR", value: "KOREA, REPUBLIC OF" },
  { label: "KW", value: "KUWAIT" },
  { label: "KG", value: "KYRGYZSTAN" },
  { label: "LV", value: "LATVIA" },
  { label: "LS", value: "LESOTHO" },
  { label: "LI", value: "LIECHTENSTEIN" },
  { label: "LT", value: "LITHUANIA" },
  { label: "LU", value: "LUXEMBOURG" },
  { label: "MO", value: "MACAO" },
  { label: "MK", value: "MACEDONIA" },
  { label: "LI", value: "LIECHTENSTEIN" },
  { label: "LT", value: "LITHUANIA" },
  { label: "LU", value: "LUXEMBOURG" },
  { label: "MO", value: "MACAO" },
  { label: "MK", value: "MACEDONIA" },
  { label: "MG", value: "MADAGASCAR" },
  { label: "MW", value: "MALAWI" },
  { label: "MY", value: "MALAYSIA" },
  { label: "MT", value: "MALTA" },
  { label: "MH", value: "MARSHALL ISLANDS" },
  { label: "MQ", value: "MARTINIQUE" },
  { label: "MR", value: "MAURITANIA" },
  { label: "MU", value: "MAURITIUS" },
  { label: "YT", value: "MAYOTTE" },
  { label: "MX", value: "MEXICO" },
  { label: "MD", value: "MOLDOVA, REPUBLIC OF" },
  { label: "MC", value: "MONACO" },
  { label: "MN", value: "MONGOLIA" },
  { label: "ME", value: "MONTENEGRO" },
  { label: "MS", value: "MONTSERRAT" },
  { label: "MA", value: "MOROCCO" },
  { label: "MZ", value: "MOZAMBIQUE" },
  { label: "NA", value: "NAMIBIA" },
  { label: "NR", value: "NAURU" },
  { label: "NP", value: "NEPAL" },
  { label: "NL", value: "NETHERLANDS" },
  { label: "AN", value: "NETHERLANDS ANTILLES" },
  { label: "NC", value: "NEW CALEDONIA" },
  { label: "NZ", value: "NEW ZEALAND" },
  { label: "NI", value: "NICARAGUA" },
  { label: "NE", value: "NIGER" },
  { label: "NU", value: "NIUE" },
  { label: "NF", value: "NORFOLK ISLAND" },
  { label: "MP", value: "NORTHERN MARIANA ISLANDS" },
  { label: "NO", value: "NORWAY" },
  { label: "OM", value: "OMAN" },
  { label: "PW", value: "PALAU" },
  { label: "PS", value: "PALESTINE" },
  { label: "PA", value: "PANAMA" },
  { label: "PY", value: "PARAGUAY" },
  { label: "PE", value: "PERU" },
  { label: "PH", value: "PHILIPPINES" },
  { label: "PN", value: "PITCAIRN" },
  { label: "PL", value: "POLAND" },
  { label: "PT", value: "PORTUGAL" },
  { label: "PR", value: "PUERTO RICO" },
  { label: "QA", value: "QATAR" },
  { label: "RE", value: "REUNION" },
  { label: "RO", value: "ROMANIA" },
  { label: "RU", value: "RUSSIAN FEDERATION" },
  { label: "RW", value: "RWANDA" },
  { label: "SH", value: "SAINT HELENA" },
  { label: "KN", value: "SAINT KITTS AND NEVIS" },
  { label: "LC", value: "SAINT LUCIA" },
  { label: "PM", value: "SAINT PIERRE AND MIQUELON" },
  { label: "WS", value: "SAMOA" },
  { label: "SM", value: "SAN MARINO" },
  { label: "ST", value: "SAO TOME AND PRINCIPE" },
  { label: "SA", value: "SAUDI ARABIA" },
  { label: "SN", value: "SENEGAL" },
  { label: "RS", value: "SERBIA" },
  { label: "SC", value: "SEYCHELLES" },
  { label: "SG", value: "SINGAPORE" },
  { label: "SK", value: "SLOVAKIA" },
  { label: "SI", value: "SLOVENIA" },
  { label: "SB", value: "SOLOMON ISLANDS" },
  { label: "ZA", value: "SOUTH AFRICA" },
  { label: "ES", value: "SPAIN" },
  { label: "SR", value: "SURINAME" },
  { label: "SJ", value: "SVALBARD AND JAN MAYEN" },
  { label: "SZ", value: "SWAZILAND" },
  { label: "SE", value: "SWEDEN" },
  { label: "CH", value: "SWITZERLAND" },
  { label: "TW", value: "TAIWAN, PROVINCE OF CHINA" },
  { label: "TZ", value: "TANZANIA, UNITED REPUBLIC OF" },
  { label: "TH", value: "THAILAND" },
  { label: "TL", value: "TIMOR-LESTE" },
  { label: "TG", value: "TOGO" },
  { label: "TK", value: "TOKELAU" },
  { label: "TO", value: "TONGA" },
  { label: "TT", value: "TRINIDAD AND TOBAGO" },
  { label: "TN", value: "TUNISIA" },
  { label: "TR", value: "TURKEY" },
  { label: "TM", value: "TURKMENISTAN" },
  { label: "TC", value: "TURKS AND CAICOS ISLANDS" },
  { label: "TV", value: "TUVALU" },
  { label: "UG", value: "UGANDA" },
  { label: "UA", value: "UKRAINE" },
  { label: "AE", value: "UNITED ARAB EMIRATES" },
  { label: "GB", value: "UNITED KINGDOM" },
  { label: "US", value: "UNITED STATES" },
  { label: "UM", value: "URUGUAY" },
  { label: "UZ", value: "UZBEKISTAN" },
  { label: "VU", value: "VANUATU" },
  { label: "VE", value: "VENEZUELA" },
  { label: "VN", value: "VIET NAM" },
  { label: "VG", value: "VIRGIN ISLANDS, BRITISH" },
  { label: "VI", value: "VIRGIN ISLANDS, U.S." },
  { label: "WF", value: "WALLIS AND FUTUNA" },
  { label: "EH", value: "WESTERN SAHARA" },
  { label: "ZM", value: "ZAMBIA" },
];

export default function Cart() {

  const validationSchema = Yup.object().shape({
    ContactPerson: Yup.string().required('Contact Person is required'),
    CompanyName: Yup.string().required('Company Name is required'),
    Mobile: Yup.string().required('Phone is required'),
    Email: Yup.string().email('Invalid email').required('Email is required'),
    Country: Yup.string().required('Country is required'),
    Comments: Yup.string().required('Comments is required'),
  });

  const [products, setProducts] = useState([]);
  const productIds = JSON.parse(localStorage.getItem("productIds")) || [];
  const [productData, setProductData] = useState({
    // Assuming you have some product data to send
    ProductDetail: [],
    ContactPerson: "",
    CompanyName: "",
    Country: "",
    Mobile: "",
    Email: "",
    Comments: "",
    IsActive: true,
  });
  const remove_inquiry = async (new_id) => {
    console.log("hii", new_id);
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/remove/InquiryProduct/${new_id}`
      );
      if (response) {
        let productIds = JSON.parse(localStorage.getItem("productIds")) || [];
        productIds = productIds.filter((productId) => productId !== new_id);
        localStorage.setItem("productIds", JSON.stringify(productIds));
        setProductData({
          ProductDetail: JSON.parse(localStorage.getItem("productIds")),
        });
        // Update the state
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== new_id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   // Retrieve the array of product IDs from local storage
  //   const productIds = JSON.parse(localStorage.getItem('productIds')) || [];

  //   // Use a Set to store unique product IDs
  //   const uniqueProductIds = Array.from(new Set(productIds));

  //   // Fetch product details for each unique product ID
  //   const fetchProductDetails = async () => {
  //     try {
  //       const productDetails = await Promise.all(
  //         uniqueProductIds.map(async (productId) => {
  //           const response = await axios.get(`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/getbyid/InquiryProduct/${productId}`);
  //           return {
  //             id: response.data._id,
  //             productDetail: response.data.ProductDetail,
  //             productDetailLabel: response.data.ProductDetailLabel,
  //             quantity: response.data.Quantity
  //           };
  //         })
  //       );
  //       // Update the state once with all fetched product details
  //       setProducts(productDetails);
  //     } catch (error) {
  //       console.error('Error fetching product details:', error);
  //     }
  //   };

  //   fetchProductDetails();
  // }, []);
  useEffect(() => {
    // Retrieve the array of product IDs from local storage
    const productIds = JSON.parse(localStorage.getItem("productIds")) || [];

    // Use a Set to store unique product IDs
    const uniqueProductIds = Array.from(new Set(productIds));

    // Fetch product details for each unique product ID
    const fetchProductDetails = async () => {
      try {
        const productDetails = await Promise.all(
          uniqueProductIds.map(async (productId) => {
            const response = await axios.get(
              `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/getbyid/InquiryProduct/${productId}`
            );
            return {
              id: response.data._id,
              productDetail: response.data.ProductDetail,
              productDetailLabel: response.data.ProductDetailLabel,
              quantity: response.data.Quantity,
            };
          })
        );
        // Update the state once with all fetched product details
        setProducts(productDetails);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();

    // Set the product details in productData state from localStorage
    setProductData((prevData) => ({
      ...prevData,
      ProductDetail: productIds,
    }));
  }, []);

  console.log("This is Product", products);

  const [product, setproductid] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(localStorage.getItem("productIds"));
  // setProductData({
  //   ProductDetail:localStorage.getItem("productIds"),
  // })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  console.log("THis is", productData);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/create/inquiry`,
        values
      );
      console.log("Data submitted successfully:", response.data);
      handleClose(); // Close the modal after successful submission
  
      // Clear form values after submission
      setSubmitting(false);
      setProductData({
        ProductDetail: JSON.parse(localStorage.getItem("productIds")),
        ContactPerson: "",
        CompanyName: "",
        Country: "",
        Mobile: "",
        Email: "",
        Comments: "",
        IsActive: true,
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error accordingly, e.g., show an error message to the user
    }
  };
  

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
            dialogClassName="modal-xl"
          >
            <Modal.Header closeButton>
              <Modal.Title>Make Inquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
      <div className="modal-body">
        <div className="contact-section">
          <div className="form-inner">
            <Formik
              initialValues={productData}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ errors, touched }) => (
                <Form id="contact-form">
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                      <label>Contact Person</label>
                      <Field
                        type="text"
                        name="ContactPerson"
                        placeholder="Contact Person"
                        className={`form-control ${errors.ContactPerson && touched.ContactPerson && 'is-invalid'}`}
                      />
                      <ErrorMessage name="ContactPerson" component="div" className="invalid-feedback" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                      <label>Company Name</label>
                      <Field
                        type="text"
                        name="CompanyName"
                        placeholder="Company Name"
                        className={`form-control ${errors.CompanyName && touched.CompanyName && 'is-invalid'}`}
                      />
                      <ErrorMessage name="CompanyName" component="div" className="invalid-feedback" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                      <label>Phone</label>
                      <Field
                        type="text"
                        name="Mobile"
                        placeholder="Phone"
                        className={`form-control ${errors.Mobile && touched.Mobile && 'is-invalid'}`}
                      />
                      <ErrorMessage name="Mobile" component="div" className="invalid-feedback" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                      <label>Email</label>
                      <Field
                        type="email"
                        name="Email"
                        placeholder="Email"
                        className={`form-control ${errors.Email && touched.Email && 'is-invalid'}`}
                      />
                      <ErrorMessage name="Email" component="div" className="invalid-feedback" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                      <label>Country</label>
                      <Field
                        as="select"
                        name="Country"
                        className={`form-control ${errors.Country && touched.Country && 'is-invalid'}`}
                      >
                        <option value="">Select Country</option>
                        {countriesArray.map((country) => (
                          <option key={country.label} value={country.value}>
                            {country.value}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="Country" component="div" className="invalid-feedback" />
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 form-group">
                      <label>Comments</label>
                      <Field
                        as="textarea"
                        name="Comments"
                        placeholder="Comments"
                        rows="1"
                        className={`form-control ${errors.Comments && touched.Comments && 'is-invalid'}`}
                      />
                      <ErrorMessage name="Comments" component="div" className="invalid-feedback" />
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
                </Form>
              )}
            </Formik>
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
                    <p>Your Cart: {products.length} Items</p>
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
                          {products.map((item, index) => {
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td class="prod-column">
                                  <h5>{item.productDetailLabel}</h5>
                                </td>
                                <td class="prod-column">
                                  <h5>{item.quantity}</h5>
                                </td>
                                {/* <!-- <td class="sub-total">1545 Rs.</td>
                                    <td class="total-price">1545 Rs</td> --> */}
                                <td>
                                  <a
                                    href="#"
                                    className="remove-btn"
                                    onClick={() => remove_inquiry(item.id)}
                                  >
                                    <i className="fa-solid fa-xmark"></i>
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Row>
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
                  </Row>
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
