import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { pdfjs, Document, Page } from 'react-pdf';
import { AiOutlineDownload } from "react-icons/ai";
import resume_pdf from '../Assets/../Assets/resume.pdf';
import './Resume.css';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {

    const [numPages, setNumPages] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowSize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowSize);

      return () => {
        window.removeEventListener('resize', handleWindowSize);
      };
    }, []);


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

  return (
    <>
      <Container fluid className="py-5">
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={8} className="d-flex justify-content-center">
            <Button
              variant="primary"
              href={resume_pdf}
              target="_blank">
            <AiOutlineDownload size={24} className="me-2" />
              &nbsp;Download Resume</Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <Card className="shadow"><Card.Body className="pdf-container">
              <Document
                file={resume_pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                className="d-flex justify-content-center">
                {Array.from(new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      width={windowWidth < 768 ? Math.min(windowWidth * 0.8, 600) : 600} />
                  ),
                )}
              </Document>
            </Card.Body></Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5 mb-3">
          <Col xs={12} md={8} className="d-flex justify-content-center">
            <Button
              variant="primary"
              href={resume_pdf}
              target="_blank">
            <AiOutlineDownload size={24} className="me-2" />
              &nbsp;Download Resume</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
