import  { useState } from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import profile1 from '../../assets/aboutprofile2.jpg'
import profile3 from '../../assets/Aboutprofile.jpg'

import profile5 from '../../assets/Newfolder/7Q9A8504.JPG - Copy.jpg'
import profile6 from '../../assets/Newfolder/7Q9A8518.JPG - Copy.jpg'
import profile7 from '../../assets/Newfolder/7Q9A8522.JPG - Copy.jpg'
import profile8 from '../../assets/Newfolder/7Q9A8543.JPG - Copy.jpg'
import profile9 from '../../assets/Newfolder/7Q9A8544.JPG - Copy.jpg'
import profile10 from '../../assets/Newfolder/7Q9A8858.JPG - Copy.jpg'
import profile11 from '../../assets/Newfolder/7Q9A9452.JPG - Copy.jpg'
import profile12 from '../../assets/Newfolder/7Q9A9456.JPG - Copy.jpg'
import profile13 from '../../assets/Newfolder/DSC_0142.JPG - Copy.jpg'
import profile14 from '../../assets/Newfolder/IMG_20240617_125148_179 - Copy.jpg'

import profile15 from '../../assets/Newfolder/photo_2024-07-06_08-35-32 (2) - Copy.jpg'
import profile16 from '../../assets/Newfolder/photo_2024-07-06_08-35-32 - Copy.jpg'
import profile17 from '../../assets/Newfolder/Screenshot_20240618-050856.png'


import AnchorLink from 'react-anchor-link-smooth-scroll'
import ResumeDetail from './ResumeDetail'
import { MdCloseFullscreen } from 'react-icons/md'
const Hero = () => {

  const [selectedService, setSelectedService] = useState(null);
  
  const handleCloseModal = () => {
    setSelectedService(null);
  };
  const [isCarouselActive, setIsCarouselActive] = useState(false);

  const toggleCarousel = () => {
    setIsCarouselActive(!isCarouselActive);
  };
  return (
    <div id='home'  className='hero'>
      <div className="hero_flex">  <div
          className={`profile_image-carousel ${
            isCarouselActive ? "active" : ""
          }`}
          onClick={toggleCarousel}
        >

  <img src={profile} alt="Profile 1" className="profile_image" />
  <img src={profile1} alt="Profile 2" className="profile_image" />
  <img src={profile3} alt="Profile 3" className="profile_image" />
 
  <img src={profile5} alt="Profile 3" className="profile_image" />
  <img src={profile6} alt="Profile 3" className="profile_image" />
  <img src={profile7} alt="Profile 3" className="profile_image" />
  <img src={profile8} alt="Profile 3" className="profile_image" />
  <img src={profile9} alt="Profile 3" className="profile_image" />
  <img src={profile10} alt="Profile 3" className="profile_image" />
  <img src={profile11} alt="Profile 3" className="profile_image" />
  <img src={profile12} alt="Profile 3" className="profile_image" />
  <img src={profile13} alt="Profile 3" className="profile_image" />
  <img src={profile14} alt="Profile 3" className="profile_image" />
  <img src={profile15} alt="Profile 3" className="profile_image" />
  <img src={profile16} alt="Profile 3" className="profile_image" />
  <img src={profile17} alt="Profile 3" className="profile_image" />



</div>

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
        <div className='heromodal'>
          <div className='hero-content'>
            <button className='hero-close-button' onClick={handleCloseModal}><MdCloseFullscreen /></button>
            < ResumeDetail />
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
