import React, { useState } from "react";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import pillicon from "../assets/images/new-home/pill-icon.png";
import Header from "../components/Header";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";

export default function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                    <a href="/">Home</a>
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
                          <input type="text" name="phone" placeholder="Phone" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Fax</label>
                          <input type="number" name="fax" placeholder="Fax" />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Mobile</label>
                          <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile"
                          />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                          <label>Email</label>
                          <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                          <label>Select Country</label>
                          <div className="select-box">
                            <Form.Select
                              aria-label="Default select example"
                              as="select"
                              name="Country"
                            >
                              <option value="Select Country">
                                Select Country
                              </option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Akrotiri">Akrotiri</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Ashmore and Cartier Islands">
                                Ashmore and Cartier Islands
                              </option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas, The Bahrain">
                                Bahamas, The Bahrain
                              </option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Bassas da India">
                                Bassas da India
                              </option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegovina">
                                Bosnia and Herzegovina
                              </option>
                              <option value="Botswana">Botswana</option>
                              <option value="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option value="Brazil">Brazil</option>
                              <option value="British Indian Ocean Territory">
                                British Indian Ocean Territory
                              </option>
                              <option value="British Virgin Islands">
                                British Virgin Islands
                              </option>
                              <option value="Brunei">Brunei</option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burma">Burma</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option value="Central African Republic">
                                Central African Republic
                              </option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Christmas Island">
                                Christmas Island
                              </option>
                              <option value="Clipperton Island">
                                Clipperton Island
                              </option>
                              <option value="Cocos (Keeling) Islands">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo, Democratic Republic of the">
                                Congo, Democratic Republic of the
                              </option>
                              <option value="Congo, Republic of the Cook Islands">
                                Congo, Republic of the Cook Islands
                              </option>
                              <option value="Coral Sea Islands">
                                Coral Sea Islands
                              </option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Cote d'Ivoire">
                                Cote d'Ivoire
                              </option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="Denmark">Denmark</option>
                              <option value="Dhekelia">Dhekelia</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Europe Island">
                                Europe Island
                              </option>
                              <option value="Falkland Islands (Islas Malvinas)">
                                Falkland Islands (Islas Malvinas)
                              </option>
                              <option value="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="French Guiana">
                                French Guiana
                              </option>
                              <option value="French Polynesia">
                                French Polynesia
                              </option>
                              <option value="French Southern and Antarctic Lands">
                                French Southern and Antarctic Lands
                              </option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia, The Gaza Strip">
                                Gambia, The Gaza Strip
                              </option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Gibraltar">Gibraltar</option>
                              <option value="Glorioso Islands">
                                Glorioso Islands
                              </option>
                              <option value="Greece">Greece</option>
                              <option value="Greenland">Greenland</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guadeloupe">Guadeloupe</option>
                              <option value="Guam">Guam</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guinea-Bissau">
                                Guinea-Bissau
                              </option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Heard Island and McDonald Islands">
                                Heard Island and McDonald Islands
                              </option>
                              <option value="Holy See (Vatican City)">
                                Holy See (Vatican City)
                              </option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran">Iran</option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Isle of Man">Isle of Man</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Jan Mayen">Jan Mayen</option>
                              <option value="Japan">Japan</option>
                              <option value="Jersey">Jersey</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Juan de Nova Island">
                                Juan de Nova Island
                              </option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kiribati">Kiribati</option>
                              <option value="Korea, North">Korea, North</option>
                              <option value="Korea, South">Korea, South</option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Laos">Laos</option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libya">Libya</option>
                              <option value="Liechtenstein">
                                Liechtenstein
                              </option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macau">Macau</option>
                              <option value="Macedonia">Macedonia</option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option value="Martinique">Martinique</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mayotte">Mayotte</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Micronesia, Federated States of Moldova">
                                Micronesia, Federated States of Moldova
                              </option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montserrat">Montserrat</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Namibia">Namibia</option>
                              <option value="Nauru">Nauru</option>
                              <option value="Navassa Island">
                                Navassa Island
                              </option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option value="New Caledonia">
                                New Caledonia
                              </option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Niue">Niue</option>
                              <option value="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau">Palau</option>
                              <option value="Panama">Panama</option>
                              <option value="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option value="Paracel Islands">
                                Paracel Islands
                              </option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Pitcairn Islands">
                                Pitcairn Islands
                              </option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Reunion">Reunion</option>
                              <option value="Romania">Romania</option>
                              <option value="Russia">Russia</option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Saint Helena">Saint Helena</option>
                              <option value="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option value="Saint Lucia">Saint Lucia</option>
                              <option value="Saint Pierre and Miquelon">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="Saint Vincent and the Grenadines">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="Samoa">Samoa</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Sao Tome and Principe">
                                Sao Tome and Principe
                              </option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Serbia and Montenegro">
                                Serbia and Montenegro
                              </option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Sierra Leone">Sierra Leone</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">Slovakia</option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option value="Somalia">Somalia</option>
                              <option value="South Africa">South Africa</option>
                              <option value="South Georgia and the South Sandwich Islands">
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="Spain">Spain</option>
                              <option value="Spratly Islands">
                                Spratly Islands
                              </option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Svalbard">Svalbard</option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syria">Syria</option>
                              <option value="Taiwan">Taiwan</option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania">Tanzania</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Timor-Leste">Timor-Leste</option>
                              <option value="Togo">Togo</option>
                              <option value="Tokelau">Tokelau</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option value="Tromelin Island">
                                Tromelin Island
                              </option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Turks and Caicos Islands">
                                Turks and Caicos Islands
                              </option>
                              <option value="Tuvalu">Tuvalu</option>
                              <option value="Uganda">Uganda</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Virgin Islands">
                                Virgin Islands
                              </option>
                              <option value="Wake Island">Wake Island</option>
                              <option value="Wallis and Futuna">
                                Wallis and Futuna
                              </option>
                              <option value="West Bank">West Bank</option>
                              <option value="Western Sahara">
                                Western Sahara
                              </option>
                              <option value="Yemen">Yemen</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </Form.Select>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 form-group">
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
                        </div>
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
