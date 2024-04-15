import React from "react";
import logo from "../assets/images/new-home/logo.png";

export default function Header() {
  return (
    <>
      {/* <!-- main header --> */}
      <header className="header-style-one">
        <div className="logo-box">
          <figure className="logo">
            <div className="custome-logo-box">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
          </figure>
        </div>
        <div className="btn-box">
          <a href="#" className="header-btn">
            <i className="flaticon-calendar"></i>Appointment
          </a>
        </div>
        {/* <!-- header-top --> */}
        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li className="support-box custom-border1">
                  <div className="icon-box">
                    <i className="flaticon-dial-pad"></i>
                  </div>
                  <a href="tel:8866002331">8866002331</a>
                </li>
                <li className="custom-border">
                  <div className="icon-box">
                    <i className="fa fa-envelope"></i>
                  </div>
                  info@shreejipharma.com
                </li>
              </ul>
              <ul className="social-links clearfix">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <div className="top-right">
                <ul className="logo-name clearfix">
                  <h3>Shreeji Pharma International</h3>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-lower --> */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="menu-area clearfix">
                {/* <!--Mobile Navigation Toggler--> */}
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
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Commitment</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Products</a>
                        <ul>
                          <li>
                            <a href="#">ACTIVE PHARMACEUTICAL INGREDIENT'S</a>
                          </li>
                          <li>
                            <a href="#">VETERINARY API'S</a>
                          </li>
                          <li>
                            <a href="#">EXCIPIENTS & FINE CHEMICAL'S</a>
                          </li>
                          <li>
                            <a href="#">PELLET'S</a>
                          </li>
                          <li>
                            <a href="#">PHYTOCHEMICALS MINERAL FORTIFIERS</a>
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
                        <a href="#">Gallery</a>
                      </li>
                      <li>
                        <a href="#">Certificate</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
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
                  <a style={{color:"white"}}  href="#">My Cart</a>
                </li>
                <li className="search-box-outer search-toggler">
                  <i className="flaticon-magnifying-glass"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!--sticky Header--> */}
        <div class="sticky-header">
          <div class="auto-container">
            <div class="outer-box">
              <div class="menu-area clearfix">
                <nav class="main-menu clearfix">
                  {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                </nav>
              </div>
              <ul class="menu-right-content">
                <li class="support-box">
                  <div class="icon-box">
                    <i class="flaticon-dial-pad"></i>
                  </div>
                  <a href="tel:8866002331">8866002331</a>
                </li>

                <li class="search-box-outer search-toggler">
                  <i class="flaticon-magnifying-glass"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- main-header end --> */}
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
