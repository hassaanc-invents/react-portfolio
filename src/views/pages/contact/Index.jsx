import React from "react";
import { Button, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import SocialConfig from "../../../config/SocialConfig";
import "./_/style.css";
import { Mail, Phone, Video } from "react-feather";
import { ContactConfig } from "../../../config/ContactConfig";

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
      <Row className="w-100 d-lg-flex justify-content-between text-center mt-5">
        <h3 className="touch-heading">Get in touch</h3>
        <p>Let's build something together :)</p>
      </Row>
      <Row className="mt-5 pt-4">
        <Col lg="4" className="offset-lg-2">
          <div className="w-100 d-flex justify-content-center">
            <Card className="date-card text-light ">
              <CardHeader className="card-month-header border-none text-center justify-content-between">
                <p>{curDate.month}</p>
              </CardHeader>
              <CardBody className="card-days text-center">
                <p>{curDate.date}</p>
                <h3>{curDate.fullDay}</h3>
              </CardBody>
            </Card>
          </div>
          <a href={ContactConfig.calendlyMeetLink} rel="noreferrer"  target="_blank" className="w-100 text-decoration-none d-flex justify-content-center">
            <Button className="meet-button mt-3">
              <Video size={20} />
              <span> Let's have a 30 min call </span>
            </Button>
          </a>
        </Col>
        <Col lg="4">
          <a
            href={`mailto:${ContactConfig.email}`}
            target="_blank"
            rel="noreferrer"
            className="w-100 text-decoration-none d-flex justify-content-center text-center"
          >
            <Button className="contact-btn mt-3">
              <Mail size={20} className="me-2" />
              {ContactConfig.email}
            </Button>
          </a>
          <a
            href={ContactConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-100 text-decoration-none d-flex justify-content-center"
          >
            <Button className="contact-btn mt-3">
              <Phone size={20} className="me-2" />
              {ContactConfig.phone}
            </Button>
          </a>
          <div className="d-flex justify-content-center">
            <hr className="social-row-contact" />
          </div>
          <div class="w-100 social-media d-flex justify-content-center align-items-center mt-4">
            {Array.isArray(SocialConfig) &&
              SocialConfig.map((item) => (
                <a
                  className="social-icon-wrapper cursor-pointer rounded-circle d-flex align-items-center justify-content-center ms-4"
                  title={item.title}
                  href={item.referTo}
                  target="_blank"
                  rel="noreferrer"
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
