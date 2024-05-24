import React from "react";
import funfact from "../assets/images/background/funfact-bg.jpg";
import { Container } from "react-bootstrap";


export default function Facts() {
  return (
    <React.Fragment>
      <section className="funfact-section centred">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${funfact})` }}
        ></div>
        <Container className="auto-container">
          <div className="sec-title light">
            <span className="sub-title">Interesting Numbers</span>
            <h2>Facts that will blow your mind</h2>
          </div>
          <div className="inner-content">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="flaticon-rating"></i>
                    </div>
                    <div className="count-outer count-box counted">
                      <span
                        className="count-text"
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
              <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="flaticon-atom"></i>
                    </div>
                    <div className="count-outer count-box counted">
                      <span
                        className="count-text"
                        data-speed="1500"
                        data-stop="100"
                      >
                        100
                      </span>
                    </div>
                    <h3>Our Quality Products</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="flaticon-lab"></i>
                    </div>
                    <div className="count-outer count-box counted">
                      <span
                        className="count-text"
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
        </Container>
      </section>
    </React.Fragment>
  );
}
