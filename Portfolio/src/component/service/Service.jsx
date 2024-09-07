import React, { useState } from 'react';
import './Service.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_data from '../../assets/services_data';
import ServiceDetail from './ServiceDetail';
import { MdCloseFullscreen } from "react-icons/md";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div id='services' className='service'>
      <div className='service-title'>
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className='service-container'>
        {Services_data.map((service, index) => (
          <div key={index} className='service-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc.substring(0, 100)}...</p>
            <div className='service-readmore'>
              <button onClick={() => setSelectedService(service)}>
               <h4> Read More</h4>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className='modal'>
          <div className='modal-content'>
            <button className='close-button' onClick={handleCloseModal}><MdCloseFullscreen /></button>
            <ServiceDetail service={selectedService} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
