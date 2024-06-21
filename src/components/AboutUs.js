import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Figure, Row,Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [cmsDesc, setcmsDesc] = useState("");
  const [title, setTitle] = useState("");
  const [cmsImage, setcmsImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/cms`
        );
        console.log(res);
        const data = res.data.find(
          (entry) => entry._id === "663f0071ef85cf304603e046"
        );
        console.log(data);
        setcmsDesc(data.cmsDesc);
        setTitle(data.Title);
        setcmsImage(data.cmsImage);
      } catch (error) {
        console.error("Error fetching about us data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <section className="about-section ">
        <Container>
          <Row className="clearfix" style={{ justifyContent: "center" }}>
            <Col lg={6} md={8} sm={12} className="image-column mb-4 mb-lg-0" style={{paddingLeft:'0px'}}  >
            <div className="image-box">
                  <div className="shape-box">
                    <div className="shape shape-1 hexagon_shape"></div>
                    <div className="shape shape-2 hexagon_shape"></div>
                    <div className="shape shape-3 hexagon_shape"></div>
                  </div>
                  <div className="image-inner hexagon_shape">
                    <Figure className="image">
                      <Image src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${cmsImage}`} alt="" fluid />
                    </Figure>
                  </div>
                  <div className="text">
                    <div className="inner">
                      <h2>
                        20<span>+</span>
                      </h2>
                      <h6>
                        Years of <br />
                        Experience
                      </h6>
                    </div>
                  </div>
                </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="content-column">
              <div className="content-box">
                <div className="sec-title">
                  <span className="sub-title">
                    WELCOME TO SHREEJI PHARMA INTERNATIONAL
                  </span>
                  <h2>About Us</h2>
                </div>
                <div className="text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${cmsDesc}<style>p{font-size:19px;font-weight:400}</style>`,
                    }}
                  />
                </div>
                <div className="btn-box mt-4">
                  <Link to="/about" className="theme-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
