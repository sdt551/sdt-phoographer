import React from "react";
import { Container, Row } from "react-bootstrap";
import LogoImg from "../img/st.png";
import Logo from "../logo/Logo";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-area">
      <Container>
        <Row>
          <Logo logo={LogoImg} />
          <p>shahadathossen551@gmail.com</p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
