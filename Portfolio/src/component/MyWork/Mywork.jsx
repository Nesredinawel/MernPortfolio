import React, { useState } from 'react'
import './Mywork.css' 
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import Myworkdetail from './Myworkdetail'




const Mywork = () => {
  const [SelectedWork, setSelectedWork] = useState(null);

  const handleContainerClick = (work) => {
    setSelectedWork(work);
  };
    // Handle going back to the service list
    const handleBackClick = () => {
      setSelectedWork(null);
    };
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
       

        {SelectedWork ? (
          // If a service is selected, show the detailed view
          <Myworkdetail work={SelectedWork} onBack={handleBackClick} />
        ):
        
(
  <div className="mywork-container">
           {  mywork_data.map((work,index)=>
           {
            return(<div  key={index} className="" onClick={() => handleContainerClick(work)} >
                                    
               
                {/* Render image only if the video file is not present */}
    {!work.w_img.includes('.mp4') && <img className='mywork-con-img' src={work.w_img} alt=''/>}

{/* Render video if it is a video file */}
{work.w_img.includes('.mp4') && (
    <video loop muted autoPlay className='mywork-con-img' width="600" >
        <source src={work.w_img} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
)}
            </div>
              
            )
           } )}
         </div>)
          }
             
  { !SelectedWork?
    (    
     <div className='showmore-con'> <div className="mywork-showmore">
     <p>Show More</p>
     <img src={arrow_icon} alt="" />
 </div></div>):""
  }
      
    </div>
  )
}

export default Mywork
