import React, { useState, useEffect } from "react";
import Background from "../../assets/images/new-home/breadcrumb-img.jpg";
import skype from "../../assets/images/new-home/skype.png";
import news from "../../assets/images/news/news-35.jpg";
import wp from "../../assets/images/new-home/whatsapp.png";
import Header from "../../components/Header";
import { useParams ,Link} from "react-router-dom";
import axios from "axios";

export default function NewsDetails() {

  const [Blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Blog`
//         );
//         console.log("Data:", response);
//         setBlogs(response.data);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     };

//     fetchData();
//   }, []);

  const { id } = useParams();
  console.log(id, "avaniid");
//   const [Blogs, setBlog] = useState(null);
  console.log(Blogs, "Blogs");
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/get/Newsletter/${id}`
        );
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching Blogs data:", error);
      }
    };

    fetchBlog();
  }, [id]);
console.log(Blogs);
  if (!Blogs) return <div>Loading...</div>;

  return (
    <React.Fragment
      style={{ position: "relative", minHeight: "100%", top: "0px" }}
    >
      <div className="boxed_wrapper">
        <Header />
        {/* <!-- page-title -->  */}
        <section className="page-title">
          <div
            className="bg-layer"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>{Blogs.Name}</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>News</li>
                <li>{Blogs.Title}</li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- page-title end -->
      <!-- service-details --> */}
        <section class="sidebar-page-container Blogs-details sec-pad">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                <div class="Blogs-details-content">
                  <div class="content-one">
                    <figure class="image-box">
                      <img
                        src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${Blogs.NewsletterImage}`}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div class="content-four pb-5">
                    <h2>{Blogs.Title}</h2>
                    
                    {
                      <span style={{ width: "300px" }}>
                        {React.createElement("div", {
                          dangerouslySetInnerHTML: { __html: Blogs.Description },
                        })}
                      </span>
                    }
                    <p></p>
                    {/* <h4>{Blogs.Title}</h4> */}
                    {/* <ul class="list-item clearfix">
                      <li>Text Here...Text Here...Text Here...</li>
                      <li>Text Here...Text Here...Text Here...</li>
                      <li>Text Here...Text Here...Text Here...</li>
                    </ul> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
      <div className="Blogs-sidebar">
        <div className="sidebar-widget category-widget">
          <div className="widget-title">
            <h3>Blogs</h3>
          </div>
          <div className="widget-content">
            <ul className="category-list clearfix">
              {Blogs.map((Blogs) => (
                <li key={Blogs._id}>
                  <Link to={`/blogdetails/${Blogs._id}`}>
                    {Blogs.Category}
                    <i className="flaticon-right-arrow"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div> */}

            </div>
          </div>
        </section>
        {/* <!-- service-details end -->
    <!-- locations-section --> */}

        {/* <!-- locations-section end --> */}
        <div className="sticky-button">
          <a
            href="assets/catalogue-shreeji-pharma.pdf"
            target="__blank"
            download=""
          >
            Download Brochure
          </a>
        </div>
        <div className="sticky-whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=918866002331&amp;text= Hello Shreeji Pharma Team, I am interested in -"
            target="_blank"
          >
            <img src={wp} className="img-responsive" />
          </a>
        </div>
        <div className="sticky-skype">
          <a href="skype:Nilesh.sheth70?Call" target="_blank">
            <img src={skype} className="img-responsive" />
          </a>
        </div>

        <div
          className="modal fade"
          id="exampleModa"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content custom-model-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Vadiwadi, Vadodara
                </h1>
                <button
                  type="button"
                  className="btn-close custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7381.956093641144!2d73.167648!3d22.31667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6c89cabb19%3A0xf803cbcf27adf1aa!2sShreeji%20Pharma%20International!5e0!3m2!1sen!2sus!4v1712310707767!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- scroll to top --> */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <i className="flaticon-up-arrow"></i>
        </button>
      </div>
    </React.Fragment>
  );
}
