import React, { useState } from 'react';

const ImageItem = ({ image }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="image-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image.urls.small} alt={image.alt_description} />
      {showPopup && (
        <div className="image-popup">
          <img src={image.urls.regular} alt={image.alt_description} />
          <div className="image-details">
            <h3>{image.alt_description}</h3>
            <p>By: {image.user.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageItem;
