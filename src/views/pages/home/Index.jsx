import { Button, Row, Col } from "reactstrap";
import "./_/style.css";
import SocialConfig from "../../../config/SocialConfig";
import { GitHub } from "react-feather";
import { OwnerDetail, AnimatedSkillsText } from "../../../config/HomeConfig";
import { useState, useEffect } from "react";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (charIndex < AnimatedSkillsText[currentIndex].length) {
        setDisplayText(
          (prevText) => prevText + AnimatedSkillsText[currentIndex][charIndex]
        );
        setCharIndex(charIndex + 1);
      } else {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % AnimatedSkillsText.length
        );
        setCharIndex(0);
        setDisplayText("");
      }
    }, 200);
    return () => clearInterval(intervalId);
  }, [charIndex, currentIndex, AnimatedSkillsText]);

  return (
    <>
      <Row className="w-100 d-none d-lg-flex justify-content-end">
        <div
          class="grad-circle d-flex justify-content-center align-items-center "
          id="minicircle"
        >
          <a
            href="https://github.com/hassaanc-invents/react-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub color="white" />
          </a>
        </div>
      </Row>
      <Row>
        <Col lg="6" className="pt-2">
          <Button className="experttitle px-4 mt-5">
            {OwnerDetail.expertIn}
          </Button>
          <h1 className="first-name mt-3">{OwnerDetail.sirName}</h1>
          <h1 className="last-name">{OwnerDetail.firstName}</h1>
          <div
            className="mt-5 d-flex align-items-center align-self-start"
            style={{ height: 0 }}
          >
            <div className="right-angle"></div>{" "}
            <span className="ms-2" style={{ borderRight: " 2px solid white" }}>
              {displayText}
            </span>
          </div>
          <div class="w-100 social-media d-flex align-items-center mt-4">
            <hr className="social-row d-none d-md-block" />
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
          <div className="mt-5">
            <a href="contact" className="text-uppercase chat-button">
              let's chat!
            </a>
          </div>
          <Row className="mt-5">
            <Col lg="4" md="6" className="d-flex align-items-center mt-3">
              <h3>{OwnerDetail.expereienceYears}+</h3>
              <span className="ms-2 home-lables">Years Experience</span>
            </Col>
            <Col lg="4" md="6" className="d-flex align-items-center mt-3">
              <h3>{OwnerDetail.completedProjects}+</h3>
              <span className="ms-2 home-lables">
                Projects Completed in {OwnerDetail.countriesWorkingIn}+
                Countries
              </span>
            </Col>
            <Col lg="4" md="6" className="d-flex align-items-center mt-3">
              <h3>{OwnerDetail.contentReach}k+</h3>
              <span className="ms-2 home-lables">Content Reach & Views</span>
            </Col>
          </Row>
        </Col>
        <Col lg="6" className="d-none d-lg-block">
          <div className="w-100 h-auto dev-circle d-flex justify-content-between rounded-circle"></div>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={OwnerDetail.image}
              alt="Owner"
              className="img-fluid main-img-fluid"
            ></img>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Index;