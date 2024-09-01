import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />

        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorum illo autem, repellat velit corrupti molestias blanditiis, perspiciatis beatae magnam aliquid minima explicabo ullam optio asperiores facilis? Sapiente quis officiis molestiae corrupti totam magnam. Iste explicabo ratione error illum nostrum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus neque praesentium labore ipsam possimus vero, officia recusandae molestiae, facere suscipit quia cum ratione nesciunt error? Maiores dolorem corporis quidem perspiciatis reprehenderit fugiat ab voluptatum voluptatem? Sed laborum in consequatur ullam.</p>
                </div>
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
            </div>
        </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>

        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>

        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>

        </div>
      </div>
    </div>
  )
}

export default About
