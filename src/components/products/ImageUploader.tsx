"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Replace with your Button component path
import { Label } from "@/components/ui/label"; // Replace with your Label component path

const ImageUploader = () => {
  const [image, setImage] = useState<string | null>(null); // State to store the uploaded image URL

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a preview URL for the uploaded image
      setImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Image Display */}
      <div className="w-72 h-72 rounded-md overflow-hidden border-2 border-gray-300">
        <img
          src={
            image || "https://via.placeholder.com/150" // Default dummy image
          }
          alt="Uploaded Preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Upload Button */}
      <Label
        htmlFor="image-upload"
        className="cursor-pointer flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-md">
        <span>📷 Add Product Image</span>
      </Label>
      <input
        type="file"
        id="image-upload"
        className="hidden" // Hide the actual file input
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUploader;
