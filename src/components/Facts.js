import React from "react";
import funfact from "../assets/images/background/funfact-bg.jpg";
import { Col, Container, Row } from "react-bootstrap";

export default function Facts() {
  return (
    <React.Fragment>
      <section className="funfact-section text-center">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${funfact})` }}
        ></div>
        <Container>
         
          <div className="inner-content">
            <Row className="clearfix">
              <Col lg={4} md={6} sm={12} className="funfact-block mb-4">
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
                        1000+
                      </span>
                    </div>
                    <h3>Our Happy Clients</h3>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="funfact-block mb-4">
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
                        100+
                      </span>
                    </div>
                    <h3>Our Quality Products</h3>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="funfact-block mb-4">
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
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}
