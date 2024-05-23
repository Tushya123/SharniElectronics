import React, { useState, useEffect } from "react";
import logo from "../assets/images/new-home/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSearch } from "../pages/Search/SearchProvider";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [products, setProducts] = useState([]);
  const [prod, setProd] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    searchQuery,
    setQuery,
    setSearchQuery,
    showModal,
    handleShow,
    handleClose,
    productsData,
  } = useSearch();

  console.log(productsData, "productsData");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {
    const storedProductIds = localStorage.getItem("productIds");
    if (storedProductIds) {
      setProd(JSON.parse(storedProductIds));
    }
  }, [localStorage.getItem("productIds")]);

  // useEffect(() => {
  //   console.log(prod.length);
  // }, [prod]);

  useEffect(() => {
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
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <!-- preloader --> */}

      <div className="loader-wrap" style={{ display: "none" }}>
        <div className="preloader">
          <div className="preloader-close">x</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- preloader end --> */}
      {/* <!--Search Popup--> */}
      <div id="search-popup" className="search-popup">
        <div className="popup-inner">
          <div className="upper-box clearfix">
            <figure className="logo-box pull-left">
              <a href="#">
                <img src={logo} />
              </a>
            </figure>
            <div className="close-search pull-right">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="overlay-layer"></div>
          <div className="auto-container">
            <div className="search-form">
              <form
                method="post"
                action="https://st.ourhtmldemo.com/new/Biogenix/#"
              >
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="search-input"
                      value=""
                      placeholder="Type your keyword and hit"
                      required=""
                    />
                    <button type="submit">
                      <i className="flaticon-magnifying-glass"></i>
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- main header --> */}
      <header className={`main-header header-style-one`}>
        <div className="container">
          <div className="translate-x">
            <div className="logo-box">
              <figure className="logo">
                <div className="custome-logo-box">
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="top-right">
                  <ul className="logo-name clearfix">
                    <h3>Shreeji Pharma International</h3>
                  </ul>
                </div>
              </figure>
            </div>
            <div
              id="google_translate_element"
              style={{ paddingBottom: "3px" }}
            ></div>
          </div>
        </div>

        <div className="header-top">
          <div
            className="auto-container"
            style={{ marginBottom: "4px", marginTop: "148px" }}
          >
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li className="support-box custom-border1">
                  <div className="icon-box">
                    <i className="flaticon-dial-pad"></i>
                  </div>
                  <a href="tel:8866002331">+91 8866002331</a>
                </li>
                <li className="custom-border">
                  <div className="icon-box">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <a href="mailto:contact@shreejipharma.com">
                    contact@shreejipharma.com
                  </a>
                </li>
              </ul>
              <ul className="social-links clearfix">
                <li>
                  <a href="http://www.facebook.com/SPI7312" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/sheth12" target="_blank">
                    <i className="fa-brands fa-square-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.linkedin.com/profile/view?id=99777214&amp;trk=tab_pro"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`header-lower ${isSticky ? "sticky-header" : ""}`}>
          <div className="auto-container">
            <div className="outer-box">
              <div className="menu-area clearfix">
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/commitment">Commitment</Link>
                      </li>
                      <li className="dropdown">
                        <Link>Products</Link>
                        <ul>
                          {products
                            .sort((a, b) =>
                              a.ProductGroup.localeCompare(b.ProductGroup)
                            )
                            .map((product, index) => (
                              <li key={index}>
                                <Link
                                  onClick={() => {
                                    window.location.href = "/products";
                                    localStorage.setItem(
                                      "selectedProductId",
                                      product.ProductGroup
                                    );
                                  }}
                                >
                                  {product.ProductGroup}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/certificate">Certificate</Link>
                      </li>
                      <li>
                        <Link to="/contect">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <ul className="menu-right-content">
                <li className="support-box">
                  <div className="icon-box">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-badge">{prod.length}</span>
                  </div>
                  <Link to="/cart">My Cart</Link>
                </li>

                {/* //search */}
                {/* Search Box Trigger */}
                <li
                  className="search-box-outer search-toggler"
                  onClick={handleShow}
                  onChange={(e) => setQuery(e.target.value)}
                >
                  <i className="flaticon-magnifying-glass"></i>
                </li>

                {/* Search Modal */}
                <Modal
                  show={showModal}
                  onHide={handleClose}
                  dialogClassName="modal-fullscreen"
                >
                  <Modal.Header closeButton>
                    <div className="upper-box clearfix">
                      <figure className="logo-box pull-left">
                        <a href="#">
                          <img src={logo} alt="Logo" />
                        </a>
                      </figure>
                      <div
                        className="close-search pull-right"
                        onClick={handleClose}
                      >
                        {/* <i className="fa-solid fa-xmark"></i> */}
                      </div>
                    </div>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="overlay-layer"></div>
                    <div className="auto-container">
                      <div className="search-form">
                        <form method="post" action="#" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <fieldset>
                              <input
                                type="search"
                                className="form-control"
                                name="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Type your keyword and hit"
                                required=""
                              />
                              <button type="submit">
                                <i className="flaticon-magnifying-glass"></i>
                              </button>
                            </fieldset>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </ul>
            </div>
          </div>
        </div>

        {/* // sticky header */}
      </header>
      {/* <!-- Mobile Menu  --> */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div
          className="menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="#">
              <img src={logo} alt="" title="" />
            </a>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">
              {/* Render your navigation links here */}
            </ul>
          </div>
          {/* Render your contact info and social links here */}
        </nav>
      </div>

      {/* Add a button or icon to toggle the mobile menu */}
      {/* <div
        className="mobile-nav-toggler"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <i className="icon-bar"></i>
        <i className="icon-bar"></i>
        <i className="icon-bar"></i>
      </div> */}

      {/* <!-- End Mobile Menu --> */}
    </>
  );
}
