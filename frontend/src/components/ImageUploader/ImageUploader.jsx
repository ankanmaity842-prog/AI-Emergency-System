import React, { useRef, useState } from "react";
import {
  Image,
  Loader2,
  X,
} from "lucide-react";

import { uploadImage } from "../../services/detector";

import "./ImageUploader.css";

const ImageUploader = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    setFile(selectedFile);

    const previewUrl =
      URL.createObjectURL(selectedFile);

    setPreview(previewUrl);
  };

  const handleUpload = async () => {
    if (!file || uploading) {
      return;
    }

    setUploading(true);

    try {
      const response = await uploadImage(file);

      if (onUpload) {
        onUpload(response);
      }

      clearImage();

    } catch (error) {
      console.error(
        "Image upload failed:",
        error
      );

      alert(
        "Unable to upload the image."
      );
    } finally {
      setUploading(false);
    }
  };

  const clearImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(null);
    setFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="image-uploader">

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />

      {!preview ? (
        <button
          className="image-upload-button"
          onClick={() =>
            fileInputRef.current?.click()
          }
          title="Upload image"
        >
          <Image size={19} />
          Image
        </button>
      ) : (
        <div className="image-preview-container">

          <img
            src={preview}
            alt="Selected upload"
            className="image-preview"
          />

          <button
            className="remove-image-button"
            onClick={clearImage}
          >
            <X size={15} />
          </button>

          <button
            className="upload-image-button"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? (
              <>
                <Loader2
                  size={16}
                  className="loading-spinner"
                />
                Uploading
              </>
            ) : (
              "Upload"
            )}
          </button>

        </div>
      )}

    </div>
  );
};

export default ImageUploader;