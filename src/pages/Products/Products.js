import React, { useState, useEffect } from "react";
import logo from "../../assets/images/new-home/logo.png";
import Background from "../../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../../assets/images/new-home/footer-location-img.jpg";
import skype from "../../assets/images/new-home/skype.png";
import wp from "../../assets/images/new-home/whatsapp.png";
import shape10 from "../../assets/images/shape/shape-10.png";
import Header from "../../components/Header";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function Products() {
  const [productData, setProductData] = useState({
    // Assuming you have some product data to send
    ProductDetail2: "",
    ProductDetailLabel: "",
    Group:"",
    Quantity: "",
    
    

  });
  
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(0); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name,setname]=useState("");
  const [id,setid]=useState("");
  const [desc,setDescription]=useState("");
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
console.log("id",id)
  useEffect(() => {
    const xyz = localStorage.getItem("selectedProductId");
    fetch(
      `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/projectdetail`
    )
      .then((response) => response.json())
      .then((data) => {
        data = data.filter(
          (item) =>
            item.ProductDetail && item.ProductDetail.ProductGroup === xyz
        );
        data.sort((a, b) => a.Description.localeCompare(b.Description));
        setData(data);
      })

      .catch((error) => console.error("Error:", error));
  }, []);
  

  useEffect(() => {
    setProductData({
      Quantity: quantity,
      Group: desc,
      ProductDetailLabel: name,
      ProductDetail2: id,
    });
  }, [quantity, desc, name, id]);


 
  console.log("THis is:",productData)
  const handleAddToCart = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/create/InquiryProduct`, productData);
      console.log('Response:', response.data.data._id);
      const productId = response.data.data._id;
      console.log('Product ID from response:', productId);
  
      // Retrieve existing product IDs from localStorage, initialize as an empty array if null
      let productIds = JSON.parse(localStorage.getItem('productIds')) || [];
      console.log('Current product IDs in localStorage:', productIds);
  
      // Add the new product ID to the array
      productIds.push(productId);
      console.log('Updated product IDs:', productIds);
  
      // Save the updated array back to localStorage
      localStorage.setItem('productIds', JSON.stringify(productIds));
      console.log('Updated product IDs saved to localStorage');
  
      // Reset the quantity
      setQuantity(0);
      if(response){
        setShow(false);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  

  const productsByStartingLetter = data.reduce((acc, product) => {
    const startingLetter = product.Description[0];
    if (!acc[startingLetter]) {
      acc[startingLetter] = [];
    }
    acc[startingLetter].push(product);
    return acc;
  }, {});

  const productsStartingWithA = data.filter((product) =>
    product.Description.startsWith("A")
  );

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
              <h1>{localStorage.getItem("selectedProductId")}</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Products</li>
                <li>{localStorage.getItem("selectedProductId")}</li>
              </ul>
            </div>
          </div>
        </section>

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
              <div className="contact-section new">
                <div className="form-inner">
                  <form id="contact-form" noValidate>
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                        <label>Product Name</label>
                        <input
                          type="text"
                          name="username"
                          placeholder="Product Name Here"
                          required
                          isDisabled={true}
                          value={name}
                          // placeholder={name}
                          

                          aria-required="true"
                        />

                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                        <label>Quantity</label>
                        <input
                          type="number"
                          name="quantity"
                          required
                          
                          placeholder="Enter Quantity"
                          aria-required="true"
                          value={quantity} // Bind the input value to the state
          onChange={handleQuantityChange}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn text-center">
                        <button
                          type="submit"
                          className="theme-btn"
                          name="submit-form"
                        >
                          <Link style={{color:'white'}} onClick={()=>{
                                     
                                      handleAddToCart();
                                    

                                    }}>Add To Cart</Link>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* <!-- sidebar-page-container --> */}
        {Object.entries(productsByStartingLetter).map(([letter, products]) => {
          let paddingValue = Math.max(5, products.length * 2);
          return (
            <section
              style={{ padding: `${paddingValue}px`, paddingTop: "30px" }}
              className="sidebar-page-container blog-large-image news-style-two sec-pad product-sec"
            >
              <div className="auto-container">
                <div className="pro-list">
                  <div className="sec-title">
                    <h3 className="title">Chemical By {letter}</h3>
                   
                  </div>
                  <div className="row">
                      {products.map((item, index) => (
                        
                        <div
                          key={index}
                          className={`col-lg-${
                            products.length === 1 ? "3" : "3"
                          } col-md-12 col-sm-12 content-side`}
                        >
                          <div className="news-block-one">
                            <div className="inner-box" style={{boxShadow:'none'}}>
                              <a
                                className="text"
                                href="/productDetails"
                                onClick={() =>
                                  localStorage.setItem(
                                    "description",
                                    item.Description
                                  )
                                }
                              >
                                <h2>{item.Description}</h2>
                              </a>
                              <div className="lower-box">
                                <div className="link">
                                  <a
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#inquiryModal"
                                    onClick={()=>{
                                      setShow(true);
                                      setname(item.Description);
                                      setid(item._id);
                                      setDescription(item.ProductDetail.ProductGroup);

                                    }}
                                  >
                                    Inquiry
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* <!-- sidebar-page-container end --> */}

        {/* <!-- locations-section --> */}
        <section className="locations-section sec-pad centred">
          <div
            className="pattern-layer"
            style={{ backgroundImage: `url(${shape10})` }}
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

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="inquiryModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Make Inquiry
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="contact-section">
                  <div className="form-inner">
                    <form
                      method="post"
                      action=""
                      id="contact-form"
                      novalidate="novalidate"
                    >
                      <div className="row clearfix">
                        <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                          <label>Product Name</label>
                          <input
                            type="text"
                            name="username"
                            placeholder="Product Name"
                            required=""
                            aria-required="true"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <label>Quantity</label>
                          <input
                            type="number"
                            name="email"
                            required=""
                            placeholder="Quantity"
                            aria-required="true"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <label>Select Grade</label>
                          <div className="select-box">
                            <select
                              className="selectmenu"
                              style={{ display: "none" }}
                            >
                              <option selected="selected">Select Grade</option>
                              <option>BP</option>
                              <option>USP</option>
                              <option>EP</option>
                              <option>Other</option>
                            </select>
                            <div
                              className="nice-select selectmenu"
                              tabindex="0"
                            >
                              <span className="current">Select Grade</span>
                              <ul className="list">
                                <li
                                  data-value="Select Grade"
                                  className="option selected"
                                >
                                  Select Grade
                                </li>
                                <li data-value="BP" className="option">
                                  BP
                                </li>
                                <li data-value="USP" className="option">
                                  USP
                                </li>
                                <li data-value="EP" className="option">
                                  EP
                                </li>
                                <li data-value="Other" className="option">
                                  Other
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button
                            type="submit"
                            className="theme-btn"
                            name="submit-form"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--====== Modal Start 3 ======--> */}

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
