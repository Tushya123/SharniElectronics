import React from 'react';
import blogbanner from "../assets/images/new-home/blog-banner.png"

export default function Blog() {
  return (
    <>
      {/* <!-- blog-grid --> */}
                <section className="blog-grid news-style-two sec-pad sec-pad1">
                    <div className="auto-container">
                        <div className="sec-title">
                            <span className="sub-title">Blogs</span>
                            <h2>Explore our latest blogs</h2>
                            <div className="btn-box"><a href="#" className="theme-btn">View All Blogs</a></div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src={blogbanner} alt=""/></figure>
                                            <div className="link-btn"><a href=""><i className="flaticon-zoom-in"></i></a></div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="category"><a href="">Laboratory</a></div>
                                            <ul className="post-info clearfix">
                                                <li>11 August, 2022</li>
                                            </ul>
                                            <h3><a href="blog-details.html">Blog Title 1</a></h3>
                                            <div className="lower-box">
                                                <div className="link"><a href="">Read More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src={blogbanner} alt=""/></figure>
                                            <div className="link-btn"><a href=""><i className="flaticon-zoom-in"></i></a></div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="category"><a href="">Research</a></div>
                                            <ul className="post-info clearfix">
                                                <li>21 July, 2022</li>
                                            </ul>
                                            <h3><a href="">Blog Title 2</a></h3>
                                            <div className="lower-box">
                                                <div className="link"><a href="">Read More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- blog-grid end --> */}

    </>
  );
}
