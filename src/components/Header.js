import React, { useState, useEffect } from "react";
import logo from "../assets/images/new-home/logo1.png";
// import logo1 from "../assets/images/new-home/new-logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSearch } from "../pages/Search/SearchProvider";
import { useNavigate } from "react-router-dom";
import { Container, Figure, Nav } from "react-bootstrap";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [prod, setProd] = useState([]);
  const [serv, setServ] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const {
    searchQuery,
    setQuery,
    setSearchQuery,
    showModal,
    handleShow,
    handleClose: originalHandleClose,
    productsData,
  } = useSearch();

  const handleClose = () => {
    // navigate(`/search?query=""`);
    originalHandleClose();
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    handleClose();

    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  const toggleShowProducts = () => {
    setShowProducts((prevShowProducts) => !prevShowProducts);
  };  const toggleShowServices = () => {
    setShowServices((prevShowProducts) => !prevShowProducts);
  };

  useEffect(() => {
    const storedProductIds = localStorage.getItem("productIds");
    if (storedProductIds) {
      setProd(JSON.parse(storedProductIds));
    }
  }, [localStorage.getItem("productIds")]);
  useEffect(() => {
    const storedServiceIds = localStorage.getItem("serviceIds");
    if (storedServiceIds) {
      setServ(JSON.parse(storedServiceIds));
    }
  }, [localStorage.getItem("serviceIds")]);

  console.log("serv", serv.length);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/areatype`
        );
        const activeProducts = response.data.filter(
          (product) => product.IsActive
        );

        // Define the custom order
        const customOrder = [
          "6641abe793c69c545ac233e2",
          "6634b74108aa777d7b59c4c1",
          "663b598ccc6c2844e6838bbc",
        ];

        // Sort the active products according to the custom order
        const sortedProducts = activeProducts.sort((a, b) => {
          const indexA = customOrder.indexOf(a._id);
          const indexB = customOrder.indexOf(b._id);

          if (indexA === -1 && indexB === -1) {
            // Both items are not in the custom order, sort randomly
            return 0.5 - Math.random();
          }

          if (indexA === -1) return 1; // a is not in the custom order, so b comes first
          if (indexB === -1) return -1; // b is not in the custom order, so a comes first

          return indexA - indexB;
        });

        // Separate ordered and unordered products
        const orderedProducts = sortedProducts.filter((product) =>
          customOrder.includes(product._id)
        );
        const unorderedProducts = sortedProducts.filter(
          (product) => !customOrder.includes(product._id)
        );

        // Shuffle unordered products randomly
        const shuffledUnorderedProducts = unorderedProducts.sort(
          () => 0.5 - Math.random()
        );

        // Combine ordered and shuffled unordered products
        const finalSortedProducts = [
          ...orderedProducts,
          ...shuffledUnorderedProducts,
        ];

        console.log("finalSortedProducts", finalSortedProducts);
        setProducts(finalSortedProducts);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/list/servicetype`
        );
        const activeProducts = response.data.filter(
          (product) => product.IsActive
        );

        // Define the custom order
       

        // Sort the active products according to the custom order
       
        // Separate ordered and unordered products
       
      
        // Shuffle unordered products randomly
      
        // Combine ordered and shuffled unordered products
       

        console.log("finalSortedProducts123", activeProducts);
        setServices(activeProducts);
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

  const handleIconClick = () => {
    setSearchQuery("");
  };

  return (
    <React.Fragment>
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
                    <h3>Sharni Electronics</h3>
                  </ul>
                </div>
              </Figure>
            </div>
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
                  <a href="tel:9925989113">+919925989113</a>
                </li>
                <li className="custom-border">
                  <div className="icon-box">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <a href="mailto:sales@sharnielectronics.com">
                    sales@sharnielectronics.com
                  </a>
                </li>
              </ul>
              <ul className="social-links clearfix px-3">
                {/* <li>
                  <a href="https://www.facebook.com/profile.php?id=100010357608216" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/TushyaGand52333" target="_blank">
                    <i className="fa-brands fa-square-twitter"></i>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/rohan-sharma-216023301/"
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
                  onClick={() => setIsMobileMenuOpen(true)}
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
                        <Link to="/commitment">Line Card</Link>
                      </li>
                      <li className="dropdown">
                        <Link>Services</Link>
                        <ul>
                          {services.map((product, index) => (
                            <li key={index}>
                              <Link
                                onClick={() => {
                                  window.location.href = "/services";
                                  localStorage.setItem(
                                    "selectedServiceId",
                                    product.ServiceGroup
                                  );
                                }}
                              >
                                {product.ServiceGroup}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link>Products</Link>
                        <ul>
                          {products.map((product, index) => (
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
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </Nav>
              </div>
              <ul className="menu-right-content">
                {isSticky ? (
                  <li className="support-box">
                    <div className="icon-box">
                      <i className="flaticon-dial-pad"></i>
                    </div>
                    <a href="tel:9925989113">+919925989113</a>
                  </li>
                ) : (
                  <li className="support-box">
                    <div className="icon-box">
                      <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                      </Link>
                      <span className="cart-badge">{prod.length}</span>
                    </div>
                    <Link to="/cart">My Cart</Link>
                  </li>
                )}
                <li
                  className="search-box-outer search-toggler"
                  onClick={handleShow}
                >
                  <i
                    className="flaticon-magnifying-glass"
                    onClick={handleIconClick}
                  ></i>
                </li>

                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <div
                      className="upper-box clearfix"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {/* <figure className="logo-box pull-left">
                        <a href="#">
                          <img className="searchlogo" src={logo1} alt="Logo" />
                        </a>
                      </figure> */}
                      {/* <div
                        className="close-search pull-right"
                        onClick={handleClose}
                        style={{
                          cursor: "pointer",
                          marginLeft: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <i
                          className="fas fa-times"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </div> */}
                    </div>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="overlay-layer"></div>
                    <div className="auto-container">
                      <div className="search-form">
                        <form method="post" action="#" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <fieldset>
                              <div>
                                <span style={{ display: "flex" }}>
                                  <button
                                    type="submit"
                                    className="button_setting"
                                  >
                                    <i
                                      className="flaticon-magnifying-glass "
                                      style={{ padding: "10px" }}
                                    ></i>
                                  </button>
                                  <input
                                    type="search"
                                    className="search_setting"
                                    name="search-field"
                                    value={searchQuery}
                                    onChange={(e) =>
                                      setSearchQuery(e.target.value)
                                    }
                                    placeholder="Type your keyword and hit"
                                    required=""
                                  />
                                </span>
                              </div>
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

      <Offcanvas
        className="offcanvas"
        show={isMobileMenuOpen}
        onHide={() => setIsMobileMenuOpen(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="nav-logo">
              {/* <Link to="/">
                <img
                  src={logo1}
                  alt=""
                  title=""
                  style={{ backgroundColor: "white" }}
                />
              </Link> */}
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="menu-box">
            <div className="menu-outer">
              {/* <ul className="navigation clearfix upper">
                <li>
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/commitment"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Commitment
                  </Link>
                </li>

                <li className="dropdown">
                  <div onClick={toggleShowProducts}>
                    <Link className="dropdown-toggle">
                      Products
                      <span>
                        {showProducts ? (
                          <RiArrowUpSLine />
                        ) : (
                          <RiArrowDownSLine />
                        )}
                      </span>
                    </Link>
                  </div>
                  {showProducts && (
                    <ul className="">
                      {products
                        .sort((a, b) =>
                          a.ProductGroup.localeCompare(b.ProductGroup)
                        )
                        .map((product, index) => (
                          <li key={index} className="ps-4">
                            <Link
                              style={{ padding: "10px" }}
                              to="#"
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
                  )}
                </li>
                <li className="dropdown">
                  <div onClick={toggleShowProducts}>
                    <Link className="dropdown-toggle">
                      Products
                      <span>
                        {showProducts ? (
                          <RiArrowUpSLine />
                        ) : (
                          <RiArrowDownSLine />
                        )}
                      </span>
                    </Link>
                  </div>
                  {showProducts && (
                    <ul className="">
                      {products
                        .sort((a, b) =>
                          a.ProductGroup.localeCompare(b.ProductGroup)
                        )
                        .map((product, index) => (
                          <li key={index} className="ps-4">
                            <Link
                              style={{ padding: "10px" }}
                              to="#"
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
                  )}
                </li>

                <li>
                  <Link
                    to="/gallery"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certificate"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Certificate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul> */}
              <ul className="navigation clearfix">
                      <li>
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                      </li>
                      <li>
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                      </li>
                      <li>
                        <Link to="/commitment" onClick={() => setIsMobileMenuOpen(false)}>Line Card</Link>
                      </li>
                      {/* <li className="dropdown">
                        <Link onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                        <ul>
                          {services.map((product, index) => (
                            <li key={index}>
                              <Link
                                onClick={() => {
                                  window.location.href = "/services";
                                  localStorage.setItem(
                                    "selectedServiceId",
                                    product.ServiceGroup
                                  );
                                
                                }}
                                
                              >
                                {product.ServiceGroup}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li> */}
                      <li className="dropdown">
                  <div onClick={toggleShowServices}>
                    <Link className="dropdown-toggle">
                      Services
                      <span>
                        {showServices ? (
                          <RiArrowUpSLine />
                        ) : (
                          <RiArrowDownSLine />
                        )}
                      </span>
                    </Link>
                  </div>
                  {showServices && (
                    <ul className="">
                      {services
                        .sort((a, b) =>
                          a.ServiceGroup.localeCompare(b.ServiceGroup)
                        )
                        .map((product, index) => (
                          <li key={index} className="ps-4">
                            <Link
                              style={{ padding: "10px" }}
                              to="#"
                              onClick={() => {
                                window.location.href = "/services";
                                localStorage.setItem(
                                  "selectedServiceId",
                                  product.ServiceGroup
                                );
                              }}
                            >
                              {product.ServiceGroup}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>       <li className="dropdown">
                  <div onClick={toggleShowProducts}>
                    <Link className="dropdown-toggle">
                      Products
                      <span>
                        {showProducts ? (
                          <RiArrowUpSLine />
                        ) : (
                          <RiArrowDownSLine />
                        )}
                      </span>
                    </Link>
                  </div>
                  {showProducts && (
                    <ul className="">
                      {products
                        .sort((a, b) =>
                          a.ProductGroup.localeCompare(b.ProductGroup)
                        )
                        .map((product, index) => (
                          <li key={index} className="ps-4">
                            <Link
                              style={{ padding: "10px" }}
                              to="#"
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
                  )}
                </li>
                      
                      <li>
                        <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                      </li>
                      <li>
                        <Link to="/certificate" onClick={() => setIsMobileMenuOpen(false)}>Certificate</Link>
                      </li>
                      <li>
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                      </li>
                    </ul>
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>B/9 Nityanand park sussen Tarsali Ring Road Vadodara </li>
                <li>
                  <a href="tel:+919925989113" style={{ color: "white" }}>
                    +919925989113
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@sharnielectronics.com" style={{ color: "white" }}>
                  sales@sharnielectronics.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <Link to="/">
                    <span className="fab fa-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-facebook-square"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-pinterest-p"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-youtube"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}
