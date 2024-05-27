import React, { useState, useEffect } from "react";
import logo from "../assets/images/new-home/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { useSearch } from "../pages/Search/SearchProvider";
import { useNavigate } from "react-router-dom";
import { Container, Figure, Nav } from "react-bootstrap";
import GoogleTranslate from "./GoogleTranslate";

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

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // window.googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement({
  //     pageLanguage: 'en',
  //     layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //     gaTrack: true,
  //     gaId: 'UA-25310579-1'
  //   }, 'google_translate_element');
  // };

  return (
    <React.Fragment>
      {/* <!-- main header --> */}
      <header className={`main-header header-style-one`}>
        <Container className="container">
          <div className="translate-x">
            <div className="logo-box">
              <Figure className="logo">
                <div className="custome-logo-box">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="top-right">
                  <ul className="logo-name clearfix">
                    <h3>Shreeji Pharma International</h3>
                  </ul>
                </div>
              </Figure>
            </div>
            {/* // google */}
            {/* <div id="google_translate_element" style={{ paddingBottom: '3px' }}></div> */}
            {/* <GoogleTranslate/> */}
          </div>
        </Container>

        <div className="header-top">
          <Container
            className="auto-container"
            style={{ marginBottom: "4px", marginTop: "148px" }}
          >
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li className="support-box custom-border1">
                  <div className="icon-box">
                    <i className="flaticon-dial-pad"></i>
                  </div>
                  <a href="tel:8866002331">+918866002331</a>
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
          </Container>
        </div>

        <div
          className={`header-lower ${isSticky ? "sticky-header" : ""}`}
          style={{ zIndex: 9 }}
        >
          <Container className="auto-container">
            <div className="outer-box">
              <div className="menu-area clearfix">
                <div
                  className="mobile-nav-toggler"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <Nav className="main-menu navbar-expand-md navbar-light">
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
                </Nav>
              </div>
              <ul className="menu-right-content">
                <li className="support-box">
                  <div className="icon-box">
                    <Link to="/cart">
                      <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <span className="cart-badge">{prod.length}</span>
                  </div>
                  <Link to="/cart">My Cart</Link>
                </li>

                {/* //search */}
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
                  // dialogClassName="modal-fullscreen"
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
                      ></div>
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
          </Container>
        </div>
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
            </ul>{" "}
          </div>
          {/* Render your contact info and social links here */}
        </nav>
      </div>
    </React.Fragment>
  );
}
