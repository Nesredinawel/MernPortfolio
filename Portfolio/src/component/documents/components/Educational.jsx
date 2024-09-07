import './Educational.css'
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import Regular from './Regular';
import Certificate from './Certificate';
import { Link } from 'react-router-dom';

const Educational = () => {
  // State to handle modal visibility
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModa12Open] = useState(false);
  // Function to open the modal
  const open1Modal = () => {
    setIsModal1Open(true);
  
  };
  const open2Modal = () => {
    setIsModa12Open(true);
   
  };


  // Function to close the modal
  const closeModal = () => {
    setIsModal1Open(false);
    setIsModa12Open(false)
  };

  return (
    <div className='educational'>
      <div className='left-arrow'><span><Link to={"/"}><FaArrowLeft  /></Link></span>
        <h2> MY ACADEMIC CREDENTIAL</h2>
      </div>
      <div className="content">
        <div className="top">
          <div className="top-left">
            <h2>ACADEMIC CREDENTIALS</h2>
            <div>
              <p>
                An academic credential or educational qualification refers to 
                any official documentation or recognition awarded by an educational institution that
                certifies a person's academic achievement or expertise in a specific field. 
                These documents serve as proof that an individual has completed certain educational or 
                training programs, attained knowledge, or mastered specific skills.
              </p>
            </div>
          </div>
          <div className="top-right">
            <div>{/* profile image */}</div>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-left">
            <div>
              <h1 className='bottom-left-text'>REGULAR EDUCATIONAL DOCUMENT</h1>
              <h4>A Regular Educational Document typically refers to any formal document issued by an
                educational institution to certify or record a student's academic journey or achievements.
              </h4>
            </div>
            <div className="bottom-left-bottom" onClick={open1Modal}>
           <div className="bottom-left-bottom-detail">
           <h1>My ACADEMIC CREDENTIAL</h1>
           </div>
            </div>
          </div>

          <div className="bottom-right">
            <div>
              <h1 className='bottom-right-text'>CERTIFICATIONS</h1>
              <h4>
                A certificate is a formal document recognizing completion of a course, training, or achievement, 
                serving as proof of qualifications or participation in various contexts.
              </h4>
            </div>
            <div className="bottom-right-bottom" onClick={open2Modal}>
            <div className="bottom-right-bottom-detail">
           <h1>My <span>CERTIFICATIONS</span></h1>
           </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 1 */}
      {isModal1Open && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>Educational Document</h2>
            <Regular />
          </div>
        </div>
      )}

        {/* Modal 2 */}
        {isModal2Open && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>Certification</h2>
               <div className="">
               <Certificate />
               </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Educational;
