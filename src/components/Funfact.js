import React from 'react';

export default function Funfact() {
  return (
    <>
      {/* <!-- funfact-section --> */}
      <section className="funfact-section centred">
        <div
          className="bg-layer"
        //   style="background-image: url(assets/images/background/funfact-bg.jpg);"
        ></div>
        <div className="auto-container">
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
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed="1500"
                        data-stop="1000"
                      >
                        0
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
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed="1500"
                        data-stop="100"
                      >
                        0
                      </span>
                    </div>
                    <h3>Our Qulity Products</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="flaticon-lab"></i>
                    </div>
                    <div className="count-outer count-box">
                      <span
                        className="count-text"
                        data-speed="1500"
                        data-stop="100"
                      >
                        0
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
    </>
  );
}
