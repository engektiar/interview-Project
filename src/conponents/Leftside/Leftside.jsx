import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../Images/logo.png";
import banner from "../Images/banner.png";
import "./leftside.css";
const Leftside = () => {
  return (
    <div>
      <Container className="fullpage">
        <Row>
          <Col md={12} className="sidebar">
            <div className="leftsidemain">
              <div className="logo">
                <img src={logo} alt="Not found" />
              </div>
              <div className="banner">
                <img className="bannerimg" src={banner} alt="not found" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Leftside;
