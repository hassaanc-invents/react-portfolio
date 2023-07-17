import Github from "../../../assets/icons/github.png";
import { Button, Row, Col } from "reactstrap";
import "../../../assets/style/home.css";
import DeveloperImage from "../../../assets/images/hassaan.png";
import SocialConfig from "../../../config/SocialConfig";

const Index = () => {
  return (
    <>
      <Row className="w-100 d-none d-lg-flex justify-content-end">
        <div
          class="grad-circle d-flex justify-content-center align-items-center "
          id="minicircle"
        >
          <a href="https://github.com/hassaanc-invents/react-portfolio" target="_blank">
            <img src={Github} className="githubicon"></img>
          </a>
        </div>
      </Row>
      <Row>
        <Col lg="6" className="pt-5">
          <Button className="experttitle px-4 mt-5">Full Stack Web Expert</Button>
          <h1 className="first-name mt-3">Muhammad</h1>
          <h1 className="last-name">Hassaan</h1>
          <div class="w-100 social-media d-flex align-items-center mt-4">
            <hr className="social-row"/>
            {Array.isArray(SocialConfig) && SocialConfig.map((item)=>(
            <a className="social-icon-wrapper cursor-pointer rounded-circle d-flex align-items-center justify-content-center ms-4" title={item.title} href={item.referTo} target="_blank">
            {item.icon}
            </a>
            ))}
          </div>
          <div className="mt-5">
          <a href="contact" className="text-uppercase chat-button">let's chat!</a>
          </div>
          <Row className="mt-5">
            <Col lg="4" md="6" className="d-flex align-items-center mt-3">
              <h3>
                2+
              </h3>
              <span className="ms-2 home-lables">
                Years Experience
              </span>
            </Col>
            <Col lg="4" md="6" className="d-flex align-items-center mt-3">
              <h3>
                15+
              </h3>
              <span className="ms-2 home-lables">
                Projects Completed in 10+ Countries
              </span>
            </Col>
            <Col lg="4" md="6" className="d-flex align-items-center mt-3">
              <h3>
                55k+
              </h3>
              <span className="ms-2 home-lables">
                Content Reach & Views
              </span>
            </Col>
          </Row>
        </Col>
        <Col lg="6" className="d-none d-lg-block">
          <div className="w-100 h-auto dev-circle d-flex justify-content-between rounded-circle">
          </div>
          <div className="d-flex justify-content-center align-items-center">
          <img src={DeveloperImage} className="img-fluid main-img-fluid"></img>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Index;
