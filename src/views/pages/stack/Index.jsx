import { Button, Row, Col } from "reactstrap";
import "./_/style.css";
import { StackTechnologies } from "../../../config/stackConfig";
import { MainiStackInformation } from "../../../config/stackConfig";

const Index = () => {
  return (
    <>
      <Row className="mt-2 mt-lg-5">
        <Col lg="6" className="pt-1 pt-lg-4">
          <h2 className="tech-stack-heading">
            {MainiStackInformation.heading}
          </h2>
          <p className="tech-detail">{MainiStackInformation.detailpara}</p>
          {Array.isArray(StackTechnologies) &&
            StackTechnologies.map((el) => (
              <Row key={el.heading}>
                <span className="stack-heading my-1 mt-2">{el.heading}</span>
                <div className="mt-2">
                  {Array.isArray(el.skills) &&
                    el.skills.map((skill) => (
                      <Button className="d-inline-block text-dark me-2 my-2 stack-tech-button border-none">
                        <img src={skill.icon} alt="skill icon" className="me-2" height={22} width={22} /> {skill.name}
                      </Button>
                    ))}
                </div>
              </Row>
            ))}
        </Col>
        <Col lg="6" className="d-none d-lg-block">
          <div className="d-flex justify-content-center align-items-center">
            <img
            alt="Stack"
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