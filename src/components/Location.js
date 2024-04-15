import React from 'react';
import location from "../assets/images/new-home/footer-location-img.jpg"
import skype from "../assets/images/new-home/skype.png"
import whatsapp from "../assets/images/new-home/whatsapp.png"

export default function Location() {
  return (
    <>
              {/* <!-- locations-section --> */}
        <section className="locations-section sec-pad centred">
            <div className="pattern-layer" ></div>
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Locations</span>
                    <h2>Support across 50+ countries <br />around the world</h2>
                </div>
                <div className="row clearfix justify-content-center">

                    <div className="col-lg-6 col-md-6 col-sm-12 location-block mt-5">
                        <div className="location-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src={location} alt=""/></figure>
                                <h6>SHREEJI PHARMA INTERNATIONAL</h6>
                                <h3>311, Atlantis Heights, Sarabhai Main Road, Vadiwadi, Vadodara - 390 007, Gujarat, INDIA.</h3>
                                <div className="link"><a href="#" target="_blank" data-bs-toggle="modal" data-bs-target="#exampleModa">Locate Us <i className="flaticon-right-arrow"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- locations-section end --> */}
        <div class="sticky-button">
            <a href="assets/catalogue-shreeji-pharma.pdf" target="__blank" download>Download Brochure</a>
        </div>
        <div class="sticky-whatsapp">
            <a href="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -" target="_blank">
                <img src={whatsapp} class="img-responsive"/>
            </a>
        </div>
        <div class="sticky-skype">
            <a href="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -" target="_blank">
                <img src= {skype} class="img-responsive"/>
            </a>
        </div>

    </>
  );
}
