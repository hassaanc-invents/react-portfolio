import { Card, CardBody, CardHeader, Button, Row, Col } from "reactstrap";
import "./_/style.css";
import {
  MainProjectInformation,
  ProjectsCompleted,
} from "../../../config/ProjectsConfig";

const Index = () => {
  return (
    <>
      <Row className="mt-5 pt-2 text-center">
        <h2 className="project-page-heading">
          {MainProjectInformation.heading}
        </h2>
        <p className="project-desc">{MainProjectInformation.description}</p>
      </Row>
      <Row className="mt-5">
        {Array.isArray(ProjectsCompleted) &&
          ProjectsCompleted.map((project) => (
            <Col md="6" lg="4" className="d-flex justify-content-center mb-4">
              <Card className="project-card">
                <CardHeader className="w-100 p-0">
                  <Button className="ms-2 mt-2 py-1 position-absolute source-button">
                    {project.source}
                  </Button>
                  <img
                    className="w-100 rounded"
                    height={190}
                    src={project.background}
                    alt=""
                  />
                </CardHeader>
                <CardBody>
                  <h2 className="project-name-heading text-light">
                    {project.name}
                  </h2>
                  <div className="mt-3">
                    {Array.isArray(project.availableOn) &&
                      project.availableOn.map((availableOn) => (
                        <a
                          href={availableOn.referTo}
                          target="_blank"
                          rel="noreferrer"
                          className="d-inline-block text-decoration-none"
                        >
                          <Button className="py-0 px-2 border-0 platform-button me-2">
                            {availableOn.icon}
                            {availableOn.title}
                          </Button>
                        </a>
                      ))}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};
export default Index;