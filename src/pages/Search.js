import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import shap10 from "../assets/images/shape/shape-10.png";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Search() {
      // State to hold the products
  const [products, setProducts] = useState([]);
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products data (assuming you fetch it from an API)
  useEffect(() => {
    // Example fetch request
    const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/areatype`
          );
          console.log("Data:", response);
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array means this effect runs only once after the component mounts

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.ProductGroup.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (

    <>
      <div className="boxed_wrapper">
        <Header />
        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>Search Result</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Search</li>
              </ul>
            </div>
          </div>
        </section>
        <br />
        <section className="new-prod sidebar-page-container blog-large-image news-style-two product-sec">
          <div className="auto-container">
            <div className="pro-list">
              <div className="sec-title">
                <h3 className="title">Search results for : "{searchQuery}"</h3>
              </div>

              {/* Render filtered products */}
              <div className="row">
                {filteredProducts.map((product, index) => (
                  <div className="col-lg-3 col-md-12 col-sm-12 content-side" key={index}>
                    <div className="news-block-one">
                      <div className="inner-box">
                        <Link className="text" to="/product-detail.html">
                          <h2>{product.ProductGroup}</h2>
                        </Link>
                        <div className="lower-box">
                          <div className="link">
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#inquiryModal"
                            >
                              Inquiry
                            </button>
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

        {/* <!-- locations-section --> */}
        <section className="locations-section sec-pad centred">
          <div
            className="pattern-layer"
            style={{ backgroundImage: `url(${shap10})` }}
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
    </>
  );
}
