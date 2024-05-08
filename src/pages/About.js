import React, { useState,useEffect} from "react";
import about from "../assets/images/new-home/about-img.jpg";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import Background1 from "../assets/images/background/funfact-bg.jpg";
import Header from "../components/Header";

export default function About() {
  
  return (
      <React.Fragment style={{ position: "relative", minHeight: "100%", top: "0px" }}>
        <div class="boxed_wrapper">
          <Header/>
          {/* <!-- page-title --> */}
          <section class="page-title">
            <div
              class="bg-layer"
              style={{ backgroundImage: `url(${Background})` }}
            ></div>
            <div class="auto-container">
              <div class="content-box">
                <h1>About Us</h1>
                <ul class="bread-crumb clearfix">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About</li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!-- page-title end --> */}
          {/* <!-- banner-section end --> */}
          {/* <!-- about-section --> */}
          <section class="about-section sec-pad">
            <div class="auto-container">
              <div class="row clearfix">
                <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div class="image-box">
                    <div class="shape-box">
                      <div class="shape shape-1 hexagon_shape"></div>
                      <div class="shape shape-2 hexagon_shape"></div>
                      <div class="shape shape-3 hexagon_shape"></div>
                    </div>
                    <div class="image-inner hexagon_shape">
                      <figure class="image">
                        <img src={about} alt="" />
                      </figure>
                    </div>
                    <div class="text">
                      <div class="inner">
                        <h2>
                          20<span>+</span>
                        </h2>
                        <h6>
                          Years of <br />
                          Experience
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                  <div class="content-box">
                    <div class="sec-title">
                      <span class="sub-title">
                        Welcome to Shreeji Pharma International
                      </span>
                      <h2>About Us</h2>
                    </div>
                    <div class="text">
                      <p>
                        We SHREEJI PHARMA International, established in 2004,
                        are proud to introduce ourselves as one of the leading
                        Manufacturer , Exporters AND GLOBAL SOURCING COMPANY in
                        India in the field of Active Pharma Ingredients,
                        Chemicals, Pharmaceuticals Raw Materials, herbals,
                        Phytochemicals &amp; Intermediates. We thus, mainly
                        focus on the exports of the APIs with high levels of
                        integrity, respect &amp; recognition.
                      </p>
                    </div>
                    <div class="text">
                      <p>
                        The future of every business entity depends on three
                        major factors viz. trust, quality and credibility.
                        Fuelled with these basic factors, we, SHREEJI PHARMA
                        INTERNATIONAL, have earned global recognition in a very
                        limited span of time. Working with the sole motto of
                        serving global clients with premium quality of bulk drug
                        raw materials this notable player has acquired a major
                        stake in its discipline. The company is a prominent
                        merchant exporter of Active Pharmaceutical Ingredients .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- about-section end --> */}
          {/* <!-- funfact-section --> */}
          <section class="funfact-section centred">
            <div
              class="bg-layer"
              style={{ backgroundImage: `url(${Background1})` }}
            ></div>
            <div class="auto-container">
              <div class="sec-title light">
                <span class="sub-title">Interesting Numbers</span>
                <h2>Facts that will blow your mind</h2>
              </div>
              <div class="inner-content">
                <div class="row clearfix">
                  <div class="col-lg-4 col-md-6 col-sm-12 funfact-block">
                    <div class="funfact-block-one">
                      <div class="inner-box">
                        <div class="icon-box">
                          <i class="flaticon-rating"></i>
                        </div>
                        <div class="count-outer count-box counted">
                          <span
                            class="count-text"
                            data-speed="1500"
                            data-stop="1000"
                          >
                            1000
                          </span>
                        </div>
                        <h3>Our Happy Clients</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 funfact-block">
                    <div class="funfact-block-one">
                      <div class="inner-box">
                        <div class="icon-box">
                          <i class="flaticon-atom"></i>
                        </div>
                        <div class="count-outer count-box counted">
                          <span
                            class="count-text"
                            data-speed="1500"
                            data-stop="100"
                          >
                            100
                          </span>
                        </div>
                        <h3>Our Qulity Products</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12 funfact-block">
                    <div class="funfact-block-one">
                      <div class="inner-box">
                        <div class="icon-box">
                          <i class="flaticon-lab"></i>
                        </div>
                        <div class="count-outer count-box counted">
                          <span
                            class="count-text"
                            data-speed="1500"
                            data-stop="100"
                          >
                            100
                          </span>
                          <span>%</span>
                        </div>
                        <h3>Accurate and Precise in Test Results</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- funfact-section end --> */}

          {/* <!-- locations-section --> */}
          <section class="locations-section sec-pad centred">
            <div
              class="pattern-layer"
              // style="background-image: url(assets/images/shape/shape-10.png);"
            ></div>
            <div class="auto-container">
              <div class="sec-title">
                <span class="sub-title">Locations</span>
                <h2>
                  Support across 50+ countries <br />
                  around the world
                </h2>
              </div>
              <div class="row clearfix justify-content-center">
                <div class="col-lg-6 col-md-6 col-sm-12 location-block mt-5">
                  <div class="location-block-one">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img src={footer} alt="" />
                      </figure>
                      <h6>SHREEJI PHARMA INTERNATIONAL</h6>
                      <h3>
                        311, Atlantis Heights, Sarabhai Main Road, Vadiwadi,
                        Vadodara - 390 007, Gujarat, INDIA.
                      </h3>
                      <div class="custom-info">
                        <div class="link">
                          <a href="mailto:contact@shreejipharma.com">
                            Email : contact@shreejipharma.com
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </div>
                        <div class="link">
                          <a href="tel:8866002331">
                            Contact : +91 8866002331{" "}
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </div>
                        <div class="link">
                          <a href="skype:Nilesh.sheth70?Call">
                            Skype ID: Nilesh.sheth70{" "}
                            <i class="flaticon-right-arrow"></i>
                          </a>
                        </div>
                      </div>
                      <div class="link">
                        <a
                          href="#"
                          target="_blank"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModa"
                        >
                          Locate Us <i class="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- locations-section end --> */}
          <div class="sticky-button">
            <a
              href="assets/catalogue-shreeji-pharma.pdf"
              target="__blank"
              download=""
            >
              Download Brochure
            </a>
          </div>
          <div class="sticky-whatsapp">
            <a
              href="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -"
              target="_blank"
            >
              <img src={wp} class="img-responsive" />
            </a>
          </div>
          <div class="sticky-skype">
            <a href="skype:Nilesh.sheth70?Call" target="_blank">
              <img src={skype} class="img-responsive" />
            </a>
          </div>
        </div>
            <button class="scroll-top scroll-to-target" data-target="html">
        <i class="flaticon-up-arrow"></i>
    </button>

      </React.Fragment>
    
  );
}
