import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Background from "../assets/images/new-home/breadcrumb-img.jpg";

export default function Commitment() {
  const [commitments, setCommitments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/api/auth/listonly/Commitment`);
        // Filter out inactive commitments
        const activeCommitments = res.data.filter((commitment) => commitment.IsActive);
        setCommitments(activeCommitments);
      } catch (error) {
        console.error("Error fetching commitments:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="boxed_wrapper">
        <Header />
        <section className="page-title">
          <div className="bg-layer" style={{ backgroundImage: `url(${Background})` }}></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>Commitment And Approach</h1>
              <ul className="bread-crumb clearfix">
                <li><a href="/">Home</a></li>
                <li>Commitment</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="shop-details commitment">
          <div className="auto-container">
            <div className="product-discription mb-0">
              <div className="customer-comment mb-0">
                <div className="row clearfix justify-content-center">
                  {commitments.map((commitment, index) => (
                    <div key={index} className="col-lg-6 col-md-6 col-sm-12 comment-column">
                      <div className="single-comment-box">
                        <div className="inner-box">
                          <figure className="comment-thumb">  
                            <img src={`${process.env.REACT_APP_API_URL_SHREEJI_PHARMACY}/${commitment.CommitmentImage}`} alt={`Commitment ${index}`} />
                          </figure>
                          <div className="inner">
                            <h3>{commitment.Title}</h3>
                            <p>{commitment.Description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
