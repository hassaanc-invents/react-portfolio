import React from "react";
import { Button, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import SocialConfig from "../../../config/SocialConfig";
import "./_/index.css";
import { Mail, Phone, Video } from "react-feather";

const Index = () => {
  const options = {
    detaildOption: { year: "numeric", month: "long", day: "numeric" },
    longDayOption: { weekday: "long" },
  };
  const DateMonth = new Date()
    .toLocaleDateString(undefined, options.detaildOption)
    .split(", ")[0]
    .split(" ");
  const curDate = {
    month: DateMonth[0],
    date: DateMonth[1],
    fullDay: new Date().toLocaleDateString(undefined, options.longDayOption),
  };

  return (
    <>
      <Row className="w-100 d-none d-lg-flex justify-content-between text-center mt-5">
        <h3>Get in touch</h3>
        <p>Let's build something together :)</p>
      </Row>
      <Row>
        <Col lg="2" className="d-none d-lg-block"></Col>
        <Col lg="4" className="pt-5">
          <Card className="date-card text-light ">
            <CardHeader className="card-month-header border-none text-center justify-content-between">
              <p>{curDate.month}</p>
            </CardHeader>
            <CardBody className="card-days text-center">
              <p>{curDate.date}</p>
              <h3>{curDate.fullDay}</h3>
            </CardBody>
          </Card>
          <Button className="meet-button mt-3">
            <Video size={20} />
            <span> Let's have a 15 min call </span>
          </Button>
        </Col>
        <Col lg="5" className="d-none d-lg-block">
          <Button className="contact-btn mt-5">
            <Video size={20} />
            <span className="m-2"> Hire Me </span>
          </Button>
          <Button className="contact-btn mt-3">
            <Mail size={20} />
            <span className="m-2"> Hassaan@abc </span>
          </Button>
          <Button className="contact-btn mt-3">
            <Phone size={20} />
            <span className="m-2"> 03333333300 </span>
          </Button>
          <hr className="social-row" />
          <div class="w-100 social-media d-flex align-items-center mt-4">
            {Array.isArray(SocialConfig) &&
              SocialConfig.map((item) => (
                <a
                  className="social-icon-wrapper cursor-pointer rounded-circle d-flex align-items-center justify-content-center ms-4"
                  title={item.title}
                  href={item.referTo}
                  target="_blank"
                >
                  {item.icon}
                </a>
              ))}
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Index;
