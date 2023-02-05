import React, { useState } from "react";
import { Image } from "./Image";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleBackdropClick = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {selectedImage ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
          onClick={handleBackdropClick}
        >
          <img
            src={selectedImage}
            alt=""
            style={{ maxWidth: "120%", maxHeight: "120%" }}
          />
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              handleClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;