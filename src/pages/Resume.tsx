// pages/Resume.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Card, CardContent } from '@mui/material';
import { pdfjs, Document, Page } from 'react-pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import resume_pdf from '../Assets/resume.pdf';
import './Resume.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const DownloadIcon = AiOutlineDownload as React.FC<{ size?: number; className?: string }>;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
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

  const getScale = () => {
    const containerWidth = pdfContainerRef.current ? pdfContainerRef.current.offsetWidth : 0;
    const baseWidth = 600;
    const scale = containerWidth / baseWidth;
    const minScale = 0.75;
    return Math.max(scale, minScale);
  };

  return (
    <Container maxWidth={false} className="py-5">
      <div className="flex justify-center mb-5">
        <Button
          variant="contained"
          href={resume_pdf}
          target="_blank"
          startIcon={<DownloadIcon size={24} />}
        >
          Download Resume
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-10/12">
          <Card className="shadow">
            <CardContent className="pdf-container">
              <div ref={pdfContainerRef} className="flex justify-center">
                <Document
                  file={resume_pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="flex flex-col items-center"
                >
                  {Array.from(new Array(numPages || 0), (_el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={getScale()} />
                  ))}
                </Document>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
