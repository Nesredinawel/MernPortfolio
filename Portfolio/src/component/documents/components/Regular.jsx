import React, { useState } from "react";
import "./Regular.css";
import academic from "../../../assets/academic/academic";

const Regular = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleFullScreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullScreen = () => {
    setFullscreenImage(null);
  };

  const handleDownload = (image) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "downloaded_image.jpg";
    link.click();
  };

  const handlePrint = (image) => {
    const newWindow = window.open(image, "_blank");
    newWindow.print();
  };

  return (
    <div className="regular">
      {academic.map((acc, index) => (
        <div key={index} className="regular-doc">
          <div className="left">
            <div className="left-top">
              {/* dec name */}
              <h1>{acc.a_name}</h1>
            </div>
            <div className="left-bottom">
              {/* dec image */}
              <div className="left-bottom-utti">
                <button
                  className="icon-button"
                  onClick={() => handleDownload(acc.a_images)}
                >
                  <i className="fa fa-download"></i>
                </button>
                <button
                  className="icon-button"
                  onClick={() => handlePrint(acc.a_images)}
                >
                  <i className="fa fa-print"></i>
                </button>
              </div>
              <div className="left-bottom-detail">
                <img src={acc.a_images} alt="" className="image" />
                <button
                  className="fullscreen-button"
                  onClick={() => handleFullScreen(acc.a_images)}
                >
                  <i className="fa fa-expand"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <h1>Description</h1>
            <p>{acc.a_desc}</p>
          </div>
          <hr />
        </div>
      ))}

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <div className="fullscreen-content">
            <img src={fullscreenImage} alt="Full screen" />
            <button className="close-button" onClick={closeFullScreen}>
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Regular;
