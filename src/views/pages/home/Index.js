import Github from "../../../assets/icons/github.png";
import { Button, Row, Col } from "reactstrap";
import "../../../assets/style/home.css";
const Index = () => {
  return (
    <>
      <Row className="w-100 d-none d-lg-flex justify-content-end mb-5">
        <div
          class="grad-circle d-flex justify-content-center align-items-center "
          id="minicircle"
        >
          <a href="https://github.com/hassaanc-invents" target="_blank">
            <img src={Github} className="githubicon"></img>
          </a>
        </div>
      </Row>
      <Row className="pt-5">
        <Col md="6">
          <Button className="experttitle px-4">Full Stack Web Expert</Button>
          <h1 className="first-name mt-3">Muhammad</h1>
          <h1 className="last-name">Hassaan</h1>
          <div class="trianlge-right"></div>
        </Col>
        <Col md="6"></Col>
      </Row>
    </>
  );
};
export default Index;
