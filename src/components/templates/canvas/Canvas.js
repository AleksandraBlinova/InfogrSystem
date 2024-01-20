import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./Canvas.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Canvas = () => {
  const [images, setImages] = useState([]);

  // Function to handle dropzone file drop
  const handleDrop = (acceptedFiles) => {
    const updatedImages = acceptedFiles.map((file) => {
      return {
        id: file.name,
        url: URL.createObjectURL(file),
      };
    });
    setImages((prevImages) => [...prevImages, ...updatedImages]);
  };

  // Function to handle image removal
  const removeImage = (id) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));
  };

  // Setup React-Dropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: handleDrop,
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Paper className="canvas" elevation={3}>
          {/* <div {...getRootProps()} className="canvas__dropzone">
            <input {...getInputProps()} />
          </div>
          <div className="canvas__images">
            {images.map((image) => (
              <div
                key={image.id}
                className="canvas__image"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <button
                  className="canvas__remove-btn"
                  onClick={() => removeImage(image.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div> */}
        </Paper>
      </Box>
    </>
  );
};

export default Canvas;
