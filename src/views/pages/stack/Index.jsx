import { Button, Row, Col } from "reactstrap";
import "../../../assets/style/stack.css";
// import { MainiStackInformation } from "../../../config/stackConfig";
// import { StackTechnologies } from "../../../config/stackConfig";
// import { StackTechnologies } from "../../../config/stackConfig";
import { StackTechnologies } from "../../../config/stackConfig";
import { MainiStackInformation } from "../../../config/stackConfig";

const Index = () => {
  return (
    <>
      <Row className="mt-2 mt-lg-5">
        <Col lg="6" className="pt-2 pt-lg-5">
          <h2 className="tech-stack-heading my-3">
            {MainiStackInformation.heading}
          </h2>
          <p className="tech-detail">{MainiStackInformation.detailpara}</p>
          {Array.isArray(StackTechnologies) &&
            StackTechnologies.map((el) => (
              <Row>
                <span className="stack-heading my-1 mt-2">{el.heading}</span>
                <div className="mt-2">
                  {Array.isArray(el.skills) &&
                    el.skills.map((skill) => (
                      <Button className="d-inline-block text-dark me-2 stack-tech-button border-none">
                        <img src={skill.icon} className="me-2" /> {skill.name}
                      </Button>
                    ))}
                </div>
              </Row>
            ))}
        </Col>
        <Col lg="6" className="d-none d-lg-block">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={MainiStackInformation.image}
              className="img-fluid main-img-fluid"
            ></img>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Index;