import React from "react";
import Background from "../assets/images/background/chooseus-bg.jpg"

export default function Chooseus() {
  return (
    <>
      {/* <!-- chooseus-section --> */}
      <section className="chooseus-section bg-color-1">
        <div
          className="bg-layer2"
          style={{ backgroundImage: `url(require("../assets/images/background/chooseus-bg.jpg"))` }}

        //   style="background-image: url(assets/images/background/chooseus-bg.jpg);"
        ></div>
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">Why Choose Us</span>
            <h2>Our Strenghts</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    // style="background-image: url(assets/images/shape/shape-21.png);"
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>

                  <h4>
                    Wide selection of world className pharmaceutical bulk drugs
                    offered under one roof.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    // style="background-image: url(assets/images/shape/shape-21.png);"
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>

                  <h4>
                    A transparent working system for fair business dealings.
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    // style="background-image: url(assets/images/shape/shape-21.png);"
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
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    // style="background-image: url(assets/images/shape/shape-21.png);"
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
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    // style="background-image: url(assets/images/shape/shape-21.png);"
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
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    // style="background-image: url(assets/images/shape/shape-21.png);"
                  ></div>
                  <div className="icon-box">
                    <i className="flaticon-check-mark"></i>
                  </div>

                  <h4>
                    We have a long association with the pharma industry & can
                    offer you excellent service.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- chooseus-section end --> */}
    </>
  );
}
