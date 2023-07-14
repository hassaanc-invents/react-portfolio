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
          <a href="https://github.com/hassaanc-invents" target="_blank">
            <img src={Github} className="githubicon"></img>
          </a>
        </div>
      </Row>
      <Row>
        <Col md="6" className="order-md-2 order-lg-1 pt-5">
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
        </Col>
        <Col md="6" className="order-md-1 order-lg-2">
          <div className="w-100 h-auto dev-circle d-flex justify-content-between rounded-circle">
          </div>
          <img src={DeveloperImage} className="img-fluid main-img-fluid"></img>
        </Col>
      </Row>
    </>
  );
};
export default Index;
