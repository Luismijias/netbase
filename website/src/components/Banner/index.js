import React from "react";
import { Row, Col } from "antd";

import Actions from "../Actions";
import Cluar from "../../common/Cluar";

import "./index.less";

function Banner({
  section,
  type,
  image,
  image_title,
  image_alt,
  title,
  content,
  position,
  actions,
}) {
  let backgroundPositionX = position.x !== "" ? position.x : "50%";
  let backgroundPositionY = position.y !== "" ? position.y : "50%";
  let layout = null;

  if (type === "flowchart") {
    layout = (
      <div
        className={`banner__${type}`}
        style={{
          backgroundImage: `url(/images/${section}/${image})`,
        }}
      >
        <Row>
          <Col span={24}>
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <a href="https://trello.com/b/Q2PMSedw/netbase-way">
                <button class="button">Trello</button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else if (type === "home") {
    layout = (
      <div
        className={`banner__${type}`}
        style={{
          backgroundImage: `url(/images/${section}/${image})`,
          backgroundPositionX: backgroundPositionX,
          backgroundPositionY: backgroundPositionY,
        }}
      >
        <Row className="banner__wrapper" justify="center">
          <Col lg={18} sm={24}>
            <div>
              <h1
                data-sal="slide-down"
                data-sal-duration="2000"
                data-sal-easing="ease-out-cubic"
              >
                {title}
              </h1>
              <div
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-easing="ease-out-cubic"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </Col>
          <Col lg={6} sm={24}>
            <Actions {...{ section, type, actions }} />
          </Col>
        </Row>
        <div className="banner__sub-banner">
          {Cluar.plainDictionary("text-sub-banner")}
        </div>
        <div className="banner__darken-bg"></div>
      </div>
    );
  } else if (type === "OTHER-CUSTOM-TYPE-HERE") {
    layout = <div>Your layout here</div>;
  } else if (type === "OTHER-CUSTOM-TYPE-HERE") {
    layout = <div>Your layout here</div>;
  } else if (type === "OTHER-CUSTOM-TYPE-HERE") {
    layout = <div>Your layout here</div>;
  } else {
    layout = (
      <div
        className={`banner__${type}`}
        style={{
          backgroundImage: `url(/images/${section}/${image})`,
          backgroundPositionX: backgroundPositionX,
          backgroundPositionY: backgroundPositionY,
        }}
      >
        <Row className="banner__wrapper" justify="center">
          <Col lg={18} sm={24}>
            <div>
              <h1
                data-sal="slide-down"
                data-sal-duration="2000"
                data-sal-easing="ease-out-cubic"
              >
                Crie um tipo e uma classa no less.
              </h1>
              <div
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-easing="ease-out-cubic"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </Col>
          <Col lg={6} sm={24}>
            <Actions {...{ section, type, actions }} />
          </Col>
        </Row>
        <div className="banner__sub-banner">
          {Cluar.plainDictionary("text-sub-banner")}
        </div>
        <div className="banner__darken-bg"></div>
      </div>
    );
  }

  return <section className="banner">{layout}</section>;
}

export default Banner;
