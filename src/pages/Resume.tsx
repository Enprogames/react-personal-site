// pages/Resume.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { pdfjs, Document, Page } from 'react-pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import resume_pdf from '../Assets/../Assets/resume.pdf';
import './Resume.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Placed this configuration outsude this component function, at the top level of the module.
// Could use the '.mjs' file for modern module support.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url, // Helps the bundler locate the worker relative to this file
).toString();

const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [, setWindowWidth] = useState<number>(window.innerWidth);
  const pdfContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const handleWindowSize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowSize);

      return () => {
        window.removeEventListener('resize', handleWindowSize);
      };
    }, []);


    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
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
                  {Array.from(new Array(numPages || 0), (
                    _el, index,
                  ) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      scale={getScale()}
                    />
                  ))}
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
