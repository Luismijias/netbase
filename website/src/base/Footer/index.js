import React from "react";
import { Layout, Row, Col } from "antd";
import {
  PhoneOutlined,
  HomeOutlined,
  MailOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { RiOpenSourceFill } from "react-icons/ri";
import Configuration from "../../components/Configuration";

import "./index.less";

const { Footer } = Layout;

function BaseFooter() {
  return (
    <Footer>
      <Row
        className="ant-layout-footer__wrapper"
        align="middle"
        gutter={[0, 10]}
      >
        <Col xs={24} lg={8}>
          <div
            className="logo"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-easing="ease-out-cubic"
          >
            <img alt="logo" src="/images/logo.png" />
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8, offset: 8 }}>
          <Row>
            <Col>
              <HomeOutlined />
            </Col>
            <Col>&nbsp;</Col>
            <Col>
              <address>
                <a href="https://github.com/Luismijias/netbase">
                  <Configuration parameter="footer-address" multilines />
                </a>
              </address>
            </Col>
          </Row>
          <Row>
            <Col>
            <WhatsAppOutlined />
            </Col>
            <Col>&nbsp;</Col>
            <Col>
              <address>
                <a href="https://api.whatsapp.com/send?phone=5511968007070&text=Hello%20Luis%2C%20I%20came%20from%20the%20Netbase%20link.">
                <Configuration parameter="footer-phone" />
                </a>
              </address>
            </Col>
          </Row>
          <Row>
            <Col>
            <MailOutlined />
            </Col>
            <Col>&nbsp;</Col>
            <Col>
              <address>
                <a href="mailto:luismijias@gmail.com">
                <Configuration parameter="footer-email" />
                </a>
              </address>
            </Col>
          </Row>
                <p className="social-links">
            <a href="https://github.com/Luismijias/netbase" className="share-icons">
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/@luismijias5505/videos"
              className="share-icons"
            >
              <FaYoutube />
            </a>
            <a href="https://twitter.com/luis_mijias?t=tISniqzoCYaIBNnGuNEo-g&s=09" className="share-icons">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-carlos-nogueira-mijias-b27175213"
              className="share-icons"
            >
              <FaLinkedin />
            </a>
            <a href="https://discord.gg/UCKtCeSd" className="share-icons">
              <FaDiscord />
            </a>
            <a
              href="https://www.facebook.com/mijias/"
              className="share-icons"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?i=1o98nx4fzxbwf&utm_content=41cetl5"
              className="share-icons"
            >
              <FaInstagram />
            </a>
          </p>
        </Col>
      </Row>
    </Footer>
  );
}

export default BaseFooter;
