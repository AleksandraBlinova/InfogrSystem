import React, { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs-backend-webgl";
import "./Verifier.css";
import CircularProgress from "@mui/material/CircularProgress";

const Verifier = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [results, setResults] = useState([]);
  const imageRef = useRef();

  const fileInputRef = useRef();

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }
  };

  const uploadTrigger = () => {
    fileInputRef.current.click();
  };

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };
  let [explicitPhotos, setExplicit] = useState([]);

  useEffect(() => {
    loadModel();
  }, []);

  if (isModelLoading) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Загрузка{" "}
        <CircularProgress
          color="secondary"
          size={23}
          sx={{ marginLeft: "10px" }}
        />
      </h2>
    );
  }

  const detectImage = async () => {
    const results = await model.classify(imageRef.current);
    setResults(results);
    console.log(results);
    setExplicit([]);
    results.forEach((element) => {
      debugger;
      if (
        element.className.toLowerCase().includes("gun") ||
        element.className.toLowerCase().includes("revolver") ||
        element.className.toLowerCase().includes("lighter") ||
        element.className.toLowerCase().includes("shoot") ||
        element.className.toLowerCase().includes("cigarette") ||
        element.className.toLowerCase().includes("smoke") ||
        element.className.toLowerCase().includes("rifle")
      ) {
        console.log(element.className.toLowerCase());
        setExplicit((explicitPhotos) => [
          ...explicitPhotos,
          element.className.toLowerCase(),
        ]);
      }
    });
  };
  console.log("explicitPhotos", explicitPhotos);
  return (
    <div>
      <div className="inputField">
        <input
          type="file"
          accept="image/*"
          capture="camera"
          className="uploadInput"
          onChange={uploadImage}
          ref={fileInputRef}
        />
        <button className="uploadImage" onClick={uploadTrigger}>
          Загрузить фото
        </button>
      </div>
      <div className="imageWrapper">
        <div className="imageContent">
          <div className="imageArea">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Image Preview"
                crossOrigin="anonymous"
                ref={imageRef}
              />
            )}
          </div>
        </div>
        <div>
          {explicitPhotos.length > 0 &&
            explicitPhotos.map((expl) => (
              <p
                key={expl.className}
                style={{ color: "red", fontWeight: "600", fontSize: "25px" }}
              >
                ЗАПРЕЩЕНКА!!
              </p>
            ))}
        </div>
        {imageUrl && (
          <button className="button" onClick={detectImage}>
            Определить
          </button>
        )}
      </div>
    </div>
  );
};

export default Verifier;
