import React ,{useState,useEffect}from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function ImageView() {
  const location = useLocation();
  const { galleryData } = location.state;
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);



  return (
    <div className="boxed_wrapper">
      <Header />
      <section className="page-title">
        <div
          className="bg-layer"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
        <Container>
          <div className="content-box">
            <h1>Event Name</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Gallery</li>
              <li>Event Name</li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="service-details sec-pad">
        <Container>
          <Row>
            <Col>
              <div className="service-details-content">
                <div className="content-five">
                <button onClick={handleClose}></button>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      overflowX: "auto",
                    }}
                  >
                    {galleryData.map((item, index) => (
                      <div key={index} style={{ margin: "0 5px" }}>
                        <Image
                          src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${item.imageURL}`}
                          alt={item.Category}
                          className="img-fluid"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <button
            className={`scroll-top scroll-to-target ${isVisible ? "open" : ""}`}
            onClick={scrollToTop}
            style={{ display: isVisible ? "block" : "none" }}>
          
            <i className="flaticon-up-arrow"></i>
          </button>

    </div>
  );
}
