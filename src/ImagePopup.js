import React from 'react';
import Popup from 'react-popupbox';

const ImagePopup = ({ image, onClose }) => {
  const popupOptions = {
    onOpen: () => {},
    onClose: onClose,
    position: 'center',
    scrolllock: true,
    overlay: true,
    transition: 'fade',
  };

  return (
    <Popup {...popupOptions}>
      <div className="popup-content">
        <img src={image.urls.regular} alt={image.alt_description} />
        <div className="popup-details">
          <h3>{image.alt_description}</h3>
          <p>By: {image.user.name}</p>
        </div>
      </div>
    </Popup>
  );
};

export default ImagePopup;
