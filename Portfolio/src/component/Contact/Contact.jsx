import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from  '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import tele_icon from '../../assets/icons8-telegram.svg'
import insta_icon from '../../assets/icons8-instagram.svg'
import id_icon from '../../assets/icons8-linkedin.svg'
import { Link } from 'react-router-dom'




const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8c788d0-35a5-4dc6-b5d2-8aaf0fe4535f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.success + 'Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      alert( + 'Form is not Submitted please try again')
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
             
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>If you have any work idea with me, any suggestion and question you can contact with me through thuse playforms or you can  email me directly . Let's talk  </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>nesredina35@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+251 984-70-58-97</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>AA,Ethiopia</p>
                        </div>
                        <div className="contact-detail">
                        <img src={tele_icon} alt="" /><Link>https://t.me/IgnitePasion</Link>
                        </div>
                        <div className="contact-detail">
                        <img src={insta_icon} alt="" /><p>@nesredin454</p>
                        </div>
                        <div className="contact-detail">
                        <img src={id_icon} alt="" /><Link>https://www.linkedin.com/in/nesredin-awel</Link>
                        </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message ' id=""></textarea>
                <button className="contact-submit">Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
