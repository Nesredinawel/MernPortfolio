import React, { useState } from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ResumeDetail from './ResumeDetail'
import { MdCloseFullscreen } from 'react-icons/md'
const Hero = () => {

  const [selectedService, setSelectedService] = useState(null);
  
  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div id='home'  className='hero'>
      <div className="hero_flex">  <img src={profile} alt=""  className='profile_image'/>

<div className="hero_name"><div className=""><h1><span>I'm Nesredin Awel</span></h1>
<h3>, Software developer in Ethiopia </h3></div>
 </div>
 </div>
 <p>Hi, My Name is Nesredin Awel. I’m a Computer Science graduate from Arbaminch University, Ethiopia,
with a passion for using technology to solve complex problems. I have strong communication,
management, and problem-solving skills, allowing me to collaborate effectively in cross-functional teams
and manage multiple projects simultaneously. I am committed to continuous learning and adaptability,
always eager to implement new technologies and methodologies. Experienced in web development (React
and Next.js). I’ve worked on projects like a Farmers product store web app and social media web
applications. I’m eager to deliver new technology to make life easier for people. I enjoy coding.
</p>
   <div className='hero-actions'>
  

<div className="hero-action">
<AnchorLink className='anchor-link hero-connect' offset={50} href='#contact' >  <h4>Connect with me </h4></AnchorLink>
   
   <div className='hero-resume' onClick={() => setSelectedService([])}><h4>My resume </h4></div>
</div>
   </div>


   {selectedService && (
        <div className='modal'>
          <div className='modal-content'>
            <button className='close-button' onClick={handleCloseModal}><MdCloseFullscreen /></button>
            < ResumeDetail />
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
