import React from "react";
import shape3 from "../assets/images/shape/shape-3.png";
import industry from "../assets/images/new-home/industry-serve-bg-img.jpg";
import pharmaceutical from "../assets/images/new-home/pharmaceutical.svg";
import cosmetics from "../assets/images/new-home/cosmetics.svg";
import conveyor from "../assets/images/new-home/conveyor-belt.svg";
import { Container } from "react-bootstrap";


export default function Industries() {
  return (
    <React.Fragment>
      <Container className="industries-section sec-pad">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${shape3})` }}
        ></div>
        <div className="auto-container">
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
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                  <div className="industries-block-one"></div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                  <div className="industries-block-one">
                    <div className="inner-box">
                      <div className="icon-box icon-box1">
                        <img src={pharmaceutical} alt="" />
                      </div>
                      <h6>Industry 01</h6>
                      <h3>
                        <a href="#">Pharmaceuticals</a>
                      </h3>
                      <p>Advancing health, improving lives.</p>
                      <div className="link">
                        <a href="#">
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                  <div className="industries-block-one">
                    <div className="inner-box">
                      <div className="icon-box icon-box1">
                        <img src={cosmetics} alt="" />
                      </div>
                      <h6>Industry 02</h6>
                      <h3>
                        <a href="#">Cosmetic Industries</a>
                      </h3>
                      <p>Beauty and personal care products.</p>
                      <div className="link">
                        <a href="#">
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                  <div className="industries-block-one ">
                    <div className="inner-box ">
                      <div className="icon-box icon-box1">
                        <img src={conveyor} alt="" />
                      </div>
                      <h6>Industry 03</h6>
                      <h3>
                        <a href="#">Food Industries</a>
                      </h3>
                      <p>Nutritious, quality food production.</p>
                      <div className="link">
                        <a href="#">
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                  <div className="sec-title mr-0 light">
                    <span className="sub-title">our industries</span>
                    <h2>
                      Industries <br />
                      that we served
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
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
                        <a href="#">
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                  <div className="industries-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-automobile"></i>
                      </div>
                      <h6>Industry 05</h6>
                      <h3>
                        <a href="#">Veterinary industries</a>
                      </h3>
                      <p>Animal health and wellness.</p>
                      <div className="link">
                        <a href="#">
                          <i className="flaticon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
