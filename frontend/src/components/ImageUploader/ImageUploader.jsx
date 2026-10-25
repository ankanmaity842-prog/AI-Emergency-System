import React, { useEffect, useRef, useState } from "react";
import { Image, Loader2, X } from "lucide-react";

import { uploadImage } from "../../services/detector";
import "./ImageUploader.css";

const ImageUploader = ({ onUpload }) => {
    const fileInputRef = useRef(null);
    const previewRef = useRef(null);

    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        return () => {
            if (previewRef.current) {
                URL.revokeObjectURL(previewRef.current);
            }
        };
    }, []);

    const clearImage = () => {
        if (previewRef.current) {
            URL.revokeObjectURL(previewRef.current);
            previewRef.current = null;
        }

        setPreview(null);
        setFile(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) return;

        if (!selectedFile.type.startsWith("image/")) {
            alert("Please select an image file.");
            event.target.value = "";
            return;
        }

        if (previewRef.current) {
            URL.revokeObjectURL(previewRef.current);
        }

        const previewUrl = URL.createObjectURL(selectedFile);
        previewRef.current = previewUrl;

        setFile(selectedFile);
        setPreview(previewUrl);
    };

    const handleUpload = async () => {
        if (!file || uploading) return;

        setUploading(true);

        try {
            const response = await uploadImage(file);
            const uploadedPreview = preview;

            // ChatBox now owns this URL and will revoke it on unmount.
            previewRef.current = null;

            onUpload?.(response, {
                previewUrl: uploadedPreview,
                fileName: file.name,
            });

            setPreview(null);
            setFile(null);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            console.error("Image upload failed:", error);
            alert(
                error?.response?.data?.detail ||
                "Unable to upload the image."
            );
        } finally {
            setUploading(false);
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
                    type="button"
                    className="image-upload-button"
                    onClick={() => fileInputRef.current?.click()}
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
                        type="button"
                        className="remove-image-button"
                        onClick={clearImage}
                        disabled={uploading}
                        aria-label="Remove selected image"
                    >
                        <X size={15} />
                    </button>

                    <button
                        type="button"
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