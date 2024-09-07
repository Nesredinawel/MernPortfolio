import React, { useEffect, useState } from 'react';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import './Service.css';

const ServiceDetail = ({ service }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to handle the next button click
  const handleNextImage = () => {
      setIsAnimating(true);
      setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
              prevIndex === service.s_images[0].images.length - 1 ? 0 : prevIndex + 1
          );
          setIsAnimating(false);
      }, 300); // match with the transition duration
  };

  // Function to handle the previous button click
  const handlePrevImage = () => {
      setIsAnimating(true);
      setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
              prevIndex === 0 ? service.s_images[0].images.length - 1 : prevIndex - 1
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
  }, [currentImageIndex, service.s_images]);



  const offers = service.s_offer[0].offer; 

  return (
    <div className='service-detail'>
     <div className="service-detail-left">
     <h1>{service.s_name}</h1>
     <div className="detail-bottom-left">
       <div className="detail-bottom-left-detail">
                            <button className="prev-button" onClick={handlePrevImage}>
                            <GrFormPrevious />
                            </button>
                            <div className={`image-container ${isAnimating ? 'animating' : ''}`}>
                                <img className='image'
                                    src={service.s_images[0].images[currentImageIndex]}
                                    alt="Project Overview"
                                />
                            </div>
                            <button className="next-button" onClick={handleNextImage}>
                            <GrFormNext />
                            </button>
                        </div>
     </div>
     </div>
     <div className="service-detail-right">
   <div className="service-detail-right-top">
   <h1>DESCRIPTION</h1>
   <p>{service.s_desc}</p>
   </div>
   <div className="service-detail-right-bottom">
    <h1>OFFER</h1>
    <div className="service-detail-right-bottom-list">

    {offers.map((offer, index) => (
        <div key={index}>
          {offer}
        </div>))}
        <h5>With NASS TECHNOLOGY, you get more than just a service—you gain a partner dedicated to empowering your business through technology.</h5>
    </div>
    
   </div>
     </div>
    
    </div>
  );
};

export default ServiceDetail;
