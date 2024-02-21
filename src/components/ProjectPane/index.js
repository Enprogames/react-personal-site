// components/common/ProjectPane.js
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { CodeBlock } from "react-code-blocks";
import {
  FaGithub,
} from "react-icons/fa";
import './ProjectPane.css';

export const ProjectPane = ({ title, description, keyPoints, technologies, image, elements, repositoryLink }) => {

  const id = encodeURIComponent(title.toLowerCase().replace(/ /g, '-'));

  return (
    <Container id={id}>
      <Card className="mb-3 p-3 shadow">
        <Row>
          <Col>
            <Card.Title>
              <h2>{title}</h2>
            </Card.Title>

            <Card.Body>
              {/* If description field is provided, display it as a paragraph */}
              {description && <p className="card-text">{description}</p>}
              {/* If a keyPoints field is present, display it as a list */}
              {keyPoints && <ul>
                {keyPoints.map((point, index) => <li key={index}>{point}</li>)}
              </ul>}
              {/* If technologies field is present, show as a list and have heading "technologies*/}
              {technologies && <p className="card-text">
                <small className="text-muted">Technologies used:</small>
                <ul>
                  {technologies.map((tech, index) => <li key={index}>{tech}</li>)}
                </ul>
              </p>}
              {/* If image field is present, display it */}
              {image &&
                <img
                  src={image}
                  alt={title}
                  className="project-image shadow img-fluid mb-3 d-block" />}
              {/* Loop through elements and display based on type */}
              {elements && elements.map((element, index) => {
                switch (element.type) {
                  case 'image':
                    return <img
                      key={index}
                      src={element.content}
                      alt={title}
                      className="project-image shadow img-fluid d-block" />
                  case 'points':
                    return <ul key={index}>
                      {element.content.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  case 'paragraph':
                    return <p key={index} className="card-text">{element.content}</p>
                  case 'code':
                    // Use element.language if code language is specified. Otherwise, show as plain text
                    return <CodeBlock key={index} text={element.content} language={element.language || 'text'} showLineNumbers={false} theme={element.theme || 'dracula'} />
                  default:
                    return null;
                }
              })}
              {repositoryLink && <Button variant="primary" href={repositoryLink} target="_blank">
                <FaGithub />&nbsp; Repository
              </Button>}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
