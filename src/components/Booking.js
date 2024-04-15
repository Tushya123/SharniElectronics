import React from 'react';

export default function Booking() {
  return (
    <>
              {/* <!-- booking-section --> */}
        <section className="booking-section sec-pad">
            <div className="bg-layer"
            //  style="background-image: url(assets/images/background/booking-bg.jpg);"
            ></div>
            <div className="pattern-layer">
                <div className="pattern-1"></div>
                <div className="pattern-2"></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix custom-form">
                    <div className="col-lg-5-new col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <span className="rotate-text">contact us</span>
                            <div className="shape"
                            //  style="background-image: url(assets/images/shape/shape-9.png);"
                             >


                             </div>
                            <div className="sec-title light">
                                <span className="sub-title">Inquiry Now</span>
                                <h2>Get your solution by contact us we'll reach you soon</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                        <div className="inner-content">
                            <div className="form-inner">
                                <form>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <i className="fa-solid fa-circle-user"></i>
                                            <label>Name</label>
                                            <input type="text" name="name" placeholder="Enter your name" required=""/>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <i className="fa-solid fa-phone"></i>
                                            <label>Number</label>
                                            <input type="text" name="phone" placeholder="Enter your number" required=""/>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <i className="fa-solid fa-envelope"></i>
                                            <label>Email</label>
                                            <input type="email" name="email" required="" placeholder="Enter your Email"/>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <label>Select Country</label>
                                            <div className="select-box">
                                                <select className="selectmenu" name="country">
                                                    <option selected="selected">Select Country</option>
                                                    <option>Australia</option>
                                                    <option>Canada</option>
                                                    <option>France</option>
                                                    <option>Germany</option>
                                                    <option>India</option>
                                                    <option>Italy</option>
                                                    <option>Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label>Message</label>
                                            <textarea name="message" placeholder="Enter your message" rows="3" required="" className="custom-textarea"></textarea>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                            <button type="submit" className="theme-btn">Submit Here</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* <!-- booking-section end --> */}
    </>
  );
}
