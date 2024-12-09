import { UploadImage } from "@/app/api/services/product.service";
import { useState, useEffect } from "react";

interface EditAssetsProps {
  values: any; // Formik values (initial values for the form)
  setFieldValue: (field: string, value: any) => void; // Function to update Formik's field value
}

const ImageUploader: React.FC<EditAssetsProps> = ({ values, setFieldValue }) => {
  const [images, setImages] = useState<string[]>([]); // Initialize images state with Formik values
  const [mainImage, setMainImage] = useState<string | null>(images[0] || null); // Initialize the main image

  // Effect to update the main image if images array is changed
  useEffect(() => {
    if (values?.imageUrls) {
      setImages(values.imageUrls);
    }
  }, [values]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await ImageUpload(file);

      const newImages = [...images];

      newImages[index] = url;

      setImages(newImages);

      setFieldValue("imageUrls", newImages);

      if (index === 0 && !mainImage) {
        setMainImage(url);
      }
    }
  };

  const ImageUpload = async (file: any) => {
    const formData = new FormData();

    formData.append("image", file);

    const data = await UploadImage(formData);

    console.log(data);

    return data.url;
  };

  const handleThumbnailClick = (imageUrl: string) => {
    setMainImage(imageUrl); // Change the main image when a thumbnail is clicked
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
      <div className="flex flex-col gap-4 items-center">
        {/* Main image on the left */}
        <div className="w-72 h-72 rounded-md overflow-hidden border-2 border-gray-300">
          <img
            src={mainImage || "https://via.placeholder.com/150"} // Default dummy image if no image is selected
            alt="Main Uploaded Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails on the right */}
        <div className="flex gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-16 h-16 flex flex-col items-center justify-center rounded-md border-2 border-gray-300 cursor-pointer">
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
