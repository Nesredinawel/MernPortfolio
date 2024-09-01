import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Aboutprofile.jpg'
const About = () => {
  return (
    <div id='about' className=''>
       <div className="about"> <div className='about about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />

        </div>
       <div className="">
       <div className="about-sections">
           <div className=""> <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="skill-section">
               <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    
                </div>
               </div></div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m a Computer Science graduate from Arbaminch University, Ethiopia, with a passion for using technology to solve complex problems. I have strong communication, management, and problem-solving skills, allowing me to collaborate effectively in cross-functional teams and manage multiple projects simultaneously.</p>
                 
                 {/* about status */}
                   <div className="about-status">
                        {/* educational  */}
                    <div className="about-edu">
                        <div className="certificate-cate">EDUCATIONAL</div>
                        <div className="about-edu-data">
                            <div className=""><h3>bachelor</h3>
                            <h5>Computer Science</h5>
                            <h5>ArbaMinch University</h5>
                            <h5>GPA:3.6</h5></div>
                            <div className="">
                            <h4>JUL 2024 </h4>
                            <h6>Graduation date</h6></div>
                        </div>
                    </div>
                    {/* certificational */}
                    <div className="certification">
                        <div className="certificate-cate">CERTIFICATION</div>
                        <div className="certificate">
                          <div className="certificate-data"> 
                             <div className=""><h4>AUG 2024</h4>
                             <h5>certification was issued</h5></div>
                          <div className=""><h2>Programming Fundamental</h2>
                          <h4>Udacity</h4></div>
                          </div>
                          <div className="certificate-data">
                              <div className=""><h4>AUG  2024</h4>
                              <h5>certification was issued</h5></div>
                          <div className=""><h2>Data Analysis Fundamentals</h2>
                          <h4>Udacity</h4></div>
                          </div>
                          <div className="certificate-data"> 
                             <div className=""><h4>AUG  2024</h4>
                             <h5>certification was issued</h5></div>
                          <div className=""><h2>Employability skill and job readiness training by Dereja
</h2>
                          <h4>Dereja</h4></div>
                          </div>
                            
                        </div>
                    </div>
                    {/* extra activity */}

                    <div className="ex-activity">
                        <div className="certificate-cate">EXTRA ACTIVITY</div>
                        <div className="ex-activity-data"><h4>Jan- 2019 - Apr 2020</h4>
                        <h3>Member</h3>
                        <h4>Kokebe Tsibah
                        secondary and preparatory School 
                        Charity Club
</h4></div>
                    </div>
                   </div>
                </div>
                 </div>
                 </div>
       </div></div>
              
            
       
      
    </div>
  )
}

export default About
