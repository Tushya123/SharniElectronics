import React, { useState, useEffect } from "react";
import about from "../assets/images/new-home/about-img.jpg";
import logo from "../assets/images/new-home/logo.png";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import footer from "../assets/images/new-home/footer-location-img.jpg";
import skype from "../assets/images/new-home/skype.png";
import wp from "../assets/images/new-home/whatsapp.png";
import Background1 from "../assets/images/background/funfact-bg.jpg";
import Header from "../components/Header";
import axios from "axios";
import shape10 from "../assets/images/shape/shape-10.png";

export default function About() {
  const [cmsDesc, setcmsDesc] = useState("");
  const [title, setTitle] = useState("");
  const [cmsImage, setcmsImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/cms`
        );
        console.log(res);
        const data = res.data.find(
          (entry) => entry._id === "663f4d5fef85cf304603e082"
        );
        console.log(data);
        setcmsDesc(data.cmsDesc);
        setTitle(data.Title);
        setcmsImage(data.cmsImage);
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment
      style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <div class="boxed_wrapper">
        <Header />
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
                  <a href="/">Home</a>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- page-title end --> */}
        {/* <!-- banner-section end --> */}
        {/* <!-- about-section --> */}
        <section className="about-section sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <div className="shape-box">
                    <div className="shape shape-1 hexagon_shape"></div>
                    <div className="shape shape-2 hexagon_shape"></div>
                    <div className="shape shape-3 hexagon_shape"></div>
                  </div>
                  <div className="image-inner hexagon_shape">
                    <figure className="image">
                      <img
                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${cmsImage}`}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="text">
                    <div className="inner">
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
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="sec-title">
                    <span className="sub-title">
                      Welcome to Shreeji Pharma International
                    </span>
                    <h2>About US</h2>
                  </div>
                  <div className="text">
                    {React.createElement("div", {
                      dangerouslySetInnerHTML: {
                        __html: `${cmsDesc}<style>p{font-size:19px;font-weight:400}`,
                      },
                    })}
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
            style={{ backgroundImage: `url(${shape10})` }}
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
