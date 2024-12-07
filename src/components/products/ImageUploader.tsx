import React, { useState } from "react";

const ImageUploader = () => {
  const [images, setImages] = useState<string[]>([]); // Array to store multiple image URLs
  const [mainImage, setMainImage] = useState<string | null>(null); // Store the main image

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[index] = imageUrl; // Replace the image at the specific index
        return newImages;
      });

      // Set the first image as the main image if it's the first uploaded image
      if (index === 0 && !mainImage) {
        setMainImage(imageUrl);
      }
    }
  };

  const handleThumbnailClick = (imageUrl: string) => {
    setMainImage(imageUrl); // Change the main image on thumbnail click
  };

  const renderImageInput = (index: number) => (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => handleImageChange(e, index)}
      className="hidden"
      id={`image-upload-${index}`}
    />
  );

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main Image Display */}
      <div className="flex gap-4 items-center">
        {/* Main image on the left */}
        <div className="w-72 h-72 rounded-md overflow-hidden border-2 border-gray-300">
          <img
            src={mainImage || "https://via.placeholder.com/150"} // Default dummy image if no image is selected
            alt="Main Uploaded Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails on the right */}
        <div className="flex flex-col gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-16 h-16 flex items-center justify-center rounded-md border-2 border-gray-300 cursor-pointer">
              {/* If the image slot is filled, display the image; otherwise show the '+' */}
              {images[index + 1] ? (
                <img
                  src={images[index + 1]}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => handleThumbnailClick(images[index + 1])}
                />
              ) : (
                <>
                  <label
                    htmlFor={`image-upload-${index + 1}`}
                    className="flex items-center justify-center w-full h-full text-purple-500 bg-gray-100">
                    +
                  </label>
                  {renderImageInput(index + 1)}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Upload Button for the Main Image */}
      <div className="flex justify-center gap-2 mt-4">
        <label
          htmlFor="image-upload-0"
          className="cursor-pointer flex items-center gap-2 bg-[#006666] text-white px-4 py-2 rounded-md">
          <span>📷 Change Main Image</span>
        </label>
        {renderImageInput(0)}
      </div>
    </div>
  );
};

export default ImageUploader;
