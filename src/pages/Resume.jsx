import React, { useState, useEffect, useRef } from 'react';
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
    const pdfContainerRef = useRef(null);

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

    // Adjust scale based on window width
    const getScale = () => {
      const containerWidth = pdfContainerRef.current ? pdfContainerRef.current.offsetWidth : 0;
      const baseWidth = 600; // Adjust this base width according to your PDF page size
      const scale = containerWidth / baseWidth;
      const minScale = 0.75; // Set a minimum scale to ensure content is readable
      return Math.max(scale, minScale); // Use the maximum between calculated scale and minimum scale
    };

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
              <div ref={pdfContainerRef} className="d-flex justify-content-center">
                <Document
                  file={resume_pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="d-flex align-items-center flex-column">
                  {Array.from(new Array(numPages),
                    (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        scale={getScale()} />
                    ),
                  )}
                </Document>
              </div>
            </Card.Body></Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
