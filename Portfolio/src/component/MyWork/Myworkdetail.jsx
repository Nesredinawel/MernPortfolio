import React, { useState, useEffect } from 'react';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
const Myworkdetail = ({ work, onBack }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Function to handle the next button click
    const handleNextImage = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === work.w_overview[0].images.length - 1 ? 0 : prevIndex + 1
            );
            setIsAnimating(false);
        }, 300); // match with the transition duration
    };

    // Function to handle the previous button click
    const handlePrevImage = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? work.w_overview[0].images.length - 1 : prevIndex - 1
            );
            setIsAnimating(false);
        }, 300); // match with the transition duration
    };

    // Auto-change images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 5000); // 5000ms = 5 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [currentImageIndex, work.w_overview]);

    return (
        <div className='mywork-details'>
            <div className="detail-top">
                <div className="detail-top-left">
                    <h2>{work.w_name}</h2>
                    <img src={work.w_img} alt='' />
                </div>
                <div className="detail-top-right">
                    <h2>DESCRIPTION</h2>
                    <div>{work.w_desc}</div>
                </div>
            </div>

            <div className='detail-bottom-container'>
                <h2>PROJECT OVERVIEW</h2>
                <div className="detail-bottom">
                    <div className="detail-bottom-left">
                        <h2>PRESENTATION</h2>
                        {/* Carousel for w_overview images */}
                        <div className="detail-bottom-left-detail">
                            <button className="prev-button" onClick={handlePrevImage}>
                            <GrFormPrevious />
                            </button>
                            <div className={`image-container ${isAnimating ? 'animating' : ''}`}>
                                <img
                                    src={work.w_overview[0].images[currentImageIndex]}
                                    alt="Project Overview"
                                />
                            </div>
                            <button className="next-button" onClick={handleNextImage}>
                            <GrFormNext />
                            </button>
                        </div>
                    </div>
      <div className="detail-bottom-right">
        <h2>STATUS</h2>
         {/* status */}
         <div className="detail-bottom-right-status">
         {work.w_status.map((status,index) =>(
           <div className="detail-bottom-right-status-lists">
          <div className="detail-bottom-right-status-list"> <h3>UI/UX Design: </h3><div className="">{status.s_1}</div></div>
          <hr />
        <div className="detail-bottom-right-status-list">  <h3>Frontend Development:</h3><div className="">{status.s_1}</div></div>
        <hr />
         <div className="detail-bottom-right-status-list"><h3>Backend Development:</h3><div className="">{status.s_1}</div></div>
         <hr />
        <div className="detail-bottom-right-status-list"> <h3>Integration:</h3><div className="">{status.s_1}</div></div>
        <hr />
        <div className="detail-bottom-right-status-list"> <h3>Testing & QA:</h3><div className="">{status.s_1}</div></div>
        <hr />
        <div className="detail-bottom-right-status-list"> <h3>Deployment (Staging):</h3><div className="">{status.s_1}</div></div>
        <hr />
          <div className="detail-bottom-right-status-list"><h3>Deployment (Production):</h3><div className="">{status.s_1}</div></div>
          <hr />
        <div className="detail-bottom-right-status-list"> <h3>Post-Launch Monitoring & Maintenance:</h3><div className="">{status.s_1}</div></div>
        <hr />
         </div>
         ))}
         </div>
        </div>
          </div>
          </div>
         


          {/* Add any additional detailed information here */}
         <div className="detail-end"> <button className='back-button' onClick={onBack}><h3>Back to MYWORKS</h3></button></div>
        </div>
      );
}

export default Myworkdetail
