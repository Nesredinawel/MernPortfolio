import React from 'react';
import './Hero.css'; // Make sure this CSS file styles the buttons appropriately
import resumeImage1 from '../../assets/resume1.jpg'; // Path to your resume image
import resumeImage2 from '../../assets/resume2.jpg';
const ResumeDetail = () => {
  const handlePrint = (image) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<img src="${image}" style="width:100%;"/>`);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleDownload = (image, filename) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = filename;
    link.click();
  };

  return (
    <div className="resume">
      <div className="resume-detail">
        <img src={resumeImage1} alt="Resume 1" className="resume1-image" />
        <div className="resume-buttons">
          <button 
            onClick={() => handlePrint(resumeImage1)} 
            className="resume-button print-button"
          >
            <i className="fas fa-print"></i> Print
          </button>
          <button 
            onClick={() => handleDownload(resumeImage1, 'resume1.jpg')} 
            className="resume-button download-button"
          >
            <i className="fas fa-download"></i> Download
          </button>
        </div>
      </div>

      <div className="resume-detail">
        <img src={resumeImage2} alt="Resume 2" className="resume2-image" />
        <div className="resume-buttons">
          <button 
            onClick={() => handlePrint(resumeImage2)} 
            className="resume-button print-button"
          >
            <i className="fas fa-print"></i> Print
          </button>
          <button 
            onClick={() => handleDownload(resumeImage2, 'resume2.jpg')} 
            className="resume-button download-button"
          >
            <i className="fas fa-download"></i> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetail;
