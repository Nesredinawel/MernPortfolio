import { useState } from 'react';
import './Mywork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import Myworkdetail from './Myworkdetail';

const Mywork = () => {
  const [SelectedWork, setSelectedWork] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleContainerClick = (work) => {
    setSelectedWork(work);
  };

  const handleBackClick = () => {
    setSelectedWork(null);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Determine the data to display based on the "showMore" state
  const displayedData = showMore ? mywork_data : mywork_data.slice(0, 6);

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {SelectedWork ? (
        <Myworkdetail work={SelectedWork} onBack={handleBackClick} />
      ) : (
        <div className="mywork-container">
          {displayedData.map((work, index) => (
            <div
              key={index}
              className=""
              onClick={() => handleContainerClick(work)}
            >
              {!work.w_img.includes('.mp4') && (
                <img className="mywork-con-img" src={work.w_img} alt="" />
              )}

              {work.w_img.includes('.mp4') && (
                <video
                  loop
                  muted
                  autoPlay
                  className="mywork-con-img"
                  width="600"
                >
                  <source src={work.w_img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      )}

      {!SelectedWork && (
        <div className="showmore-con">
          <div className="mywork-showmore" onClick={toggleShowMore}>
            <p>{showMore ? 'Show Less' : 'Show More'}</p>
            <img className='arrow-image' src={arrow_icon} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mywork;
