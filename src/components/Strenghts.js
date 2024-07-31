import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import chooseus from "../assets/images/background/th.jpg";
import shape21 from "../assets/images/shape/shape-21.png";

export default function Strenghts() {
  return (
    <React.Fragment>
      <section className="chooseus-section bg-color-1">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${chooseus})` }}
        ></div>
        <Container>
          <div className="sec-title">
            <span className="sub-title">Why Choose Us</span>
            <h2>Our Strenghts</h2>
          </div>
          <Row>
            <Col lg={4} md={6} sm={12} className="chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21})` }}
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>
                  <h4>
                    Wide selection of world-class Electronic Components
                    offered under one roof.
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21})` }}
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>
                  <h4>A transparent working system for fair business dealings.</h4>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21})` }}
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>
                  <h4>
                    Vigorous supply-chain management for efficient collection
                    and delivery of products.
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21})` }}
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>
                  <h4>
                    Impeccable quality, utmost customer satisfaction and
                    excellence--our hallmark.
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21})` }}
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>
                  <h4>
                    No compromises on quality as it represents the image of our
                    company.
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21})` }}
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>
                  <h4>
                    We have a long association with the pharma industry &amp;
                    can offer you excellent service.
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
