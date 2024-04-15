import React from 'react';
import newsblog from "../assets/images/new-home/news-blog.jpg"

export default function Event() {
  return (
    <>
              {/* <!-- news-section --> */}
        <section className="news-section sec-pad">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">News & Events</span>
                    <h2>Explore our latest post</h2>
                    <div className="btn-box"><a href="#" className="theme-btn">View All News</a></div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={newsblog} alt=""/></figure>
                                    <div className="link-btn"><a href="#"><i className="flaticon-zoom-in"></i></a></div>
                                </div>
                                <div className="lower-content">
                                    <div className="category"><a href="#">Shreeji Pharma</a></div>
                                    <ul className="post-info clearfix">
                                        <li>24 October, 2023</li>
                                    </ul>
                                    <h3><a href="#">Kindly visit our Booth at CPHI – Worldwide, Barcelona</a></h3>
                                    <div className="lower-box">
                                        <div className="link"><a href="#">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={newsblog} alt=""/></figure>
                                    <div className="link-btn"><a href="#"><i className="flaticon-zoom-in"></i></a></div>
                                </div>
                                <div className="lower-content">
                                    <div className="category"><a href="#"v>Shreeji Pharma</a></div>
                                    <ul className="post-info clearfix">
                                        <li>24 October, 2023</li>
                                    </ul>
                                    <h3><a href="#">Kindly visit our Booth at CPHI – Worldwide, Barcelona</a></h3>
                                    <div className="lower-box">
                                        <div className="link"><a href="#">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src={newsblog}alt=""/></figure>
                                    <div className="link-btn"><a href="#"><i className="flaticon-zoom-in"></i></a></div>
                                </div>
                                <div className="lower-content">
                                    <div className="category"><a href="#">Shreeji Pharma</a></div>
                                    <ul className="post-info clearfix">
                                        <li>24 October, 2023</li>
                                    </ul>
                                    <h3><a href="#">Kindly visit our Booth at CPHI – Worldwide, Barcelona</a></h3>
                                    <div className="lower-box">
                                        <div className="link"><a href="#">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- news-section end --> */}

    </>
  );
}
