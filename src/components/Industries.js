import React from "react";
import shape3 from "../assets/images/shape/shape-3.png";
import industry from "../assets/images/new-home/industry-serve-bg-img.jpg";
import pharmaceutical from "../assets/images/new-home/pharmaceutical.svg";
import cosmetics from "../assets/images/new-home/cosmetics.svg";
import conveyor from "../assets/images/new-home/conveyor-belt.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Industries() {
  return (
    <React.Fragment>
      <section className="industries-section sec-pad">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${shape3})` }}
        ></div>
        <Container>
          <div className="inner-container">
            <div
              className="bg-layer"
              style={{ backgroundImage: `url(${industry})` }}
            ></div>
            <div className="content-box">
              <div className="shape-box">
                <div className="shape shape-1 hexagon_shape"></div>
                <div className="shape shape-2 hexagon_shape"></div>
              </div>
              <Row>
                <Col lg={3} md={6} sm={12} className="industries-block">
                  <div className="industries-block-one"></div>
                </Col>
                <Col lg={3} md={6} sm={12} className="industries-block order-1 order-lg-0">
                  <div className="industries-block-one">
                    <div className="inner-box">
                      <div className="icon-box icon-box1">
                        <img src={pharmaceutical} alt="" />
                      </div>
                      <h6>Industry 01</h6>
                      <h3>
                        <Link to="/">Pharmaceuticals</Link>
                      </h3>
                      <p>Advancing health, improving lives.</p>
                      <div className="link">
                        <Link to="/">
                          <i className="flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="industries-block order-2 order-lg-1">
                  <div className="industries-block-one">
                    <div className="inner-box">
                      <div className="icon-box icon-box1">
                        <img src={cosmetics} alt="" />
                      </div>
                      <h6>Industry 02</h6>
                      <h3>
                        <Link to="/">Cosmetic Industries</Link>
                      </h3>
                      <p>Beauty and personal care products.</p>
                      <div className="link">
                        <Link to="/">
                          <i className="flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="industries-block order-3 order-lg-2">
                  <div className="industries-block-one">
                    <div className="inner-box">
                      <div className="icon-box icon-box1">
                        <img src={conveyor} alt="" />
                      </div>
                      <h6>Industry 03</h6>
                      <h3>
                        <Link to="/">Food Industries</Link>
                      </h3>
                      <p>Nutritious, quality food production.</p>
                      <div className="link">
                        <Link to="/">
                          <i className="flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="title-column order-0 order-lg-3">
                  <div className="sec-title mr-0 light">
                    <span className="sub-title">our industries</span>
                    <h2>
                      Industries <br />
                      that we served
                    </h2>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="industries-block order-4 order-lg-4">
                  <div className="industries-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-bread"></i>
                      </div>
                      <h6>Industry 04</h6>
                      <h3>
                        <a href="#">Nutraceuticals </a>
                      </h3>
                      <p>Enhanced health supplement foods.</p>
                      <div className="link">
                        <Link to="/">
                          <i className="flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="industries-block order-5 order-lg-4">
                  <div className="industries-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-automobile"></i>
                      </div>
                      <h6>Industry 05</h6>
                      <h3>
                        <Link to="/">Veterinary industries</Link>
                      </h3>
                      <p>Animal health and wellness.</p>
                      <div className="link">
                        <Link to="/">
                          <i className="flaticon-right-arrow"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}
