import React, { useState, useEffect } from "react";
import logo from "../assets/images/new-home/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
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
                        <Link to="/products">Products</Link>
                        <ul>
                          <li>
                            <Link to="/ProductsDetails">
                              ACTIVE PHARMACEUTICAL INGREDIENTS
                            </Link>
                          </li>
                          <li>
                            <a href="#">VETERINARY APIS</a>
                          </li>
                          <li>
                            <a href="#">EXCIPIENTS</a>
                          </li>
                          <li>
                            <a href="#">PELLETS</a>
                          </li>
                          <li>
                            <a href="#">PHYTOCHEMICALS</a>
                          </li>
                          <li>
                            <a href="#">MINERAL FORTIFIERS</a>
                          </li>
                          <li>
                            <a href="#">COSMETIC INGREDIENTS</a>
                          </li>
                          <li>
                            <a href="#">Corticosteroids & Hormons</a>
                          </li>
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
                  </div>
                  <Link to="/cart">My Cart</Link>
                </li>
                <li className="search-box-outer search-toggler">
                  <i className="flaticon-magnifying-glass"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* // sticky header */}
      </header>
      {/* <!-- Mobile Menu  --> */}
      <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn">
          <i class="fas fa-times"></i>
        </div>

        <nav class="menu-box">
          <div class="nav-logo">
            <a href="#">
              <img src={logo} alt="" title="" />
            </a>
          </div>
          <div class="menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          </div>
          <div class="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <a href="tel:+8801682648101">+88 01682648101</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
          <div class="social-links">
            <ul class="clearfix">
              <li>
                <a href="#">
                  <span class="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-facebook-square"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-pinterest-p"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <!-- End Mobile Menu --> */}
    </>
  );
}
