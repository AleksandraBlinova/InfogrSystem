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
  const textInputRef = useRef();
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

  const handleInputChange = (e) => {
    setImageUrl(e.target.value);
    setResults([]);
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
  let explicitPhotos = [];
  const detectImage = async () => {
    textInputRef.current.value = "";
    const results = await model.classify(imageRef.current);
    setResults(results);
    results.forEach((element) => {
      if (element.className.toLowerCase().includes("gun"))
        explicitPhotos.push(element);
    });
    console.log("explicitPhotos", explicitPhotos);
  };
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
        <span className="or">ИЛИ</span>
        <input
          type="text"
          placeholder="Вставьте ссылку"
          ref={textInputRef}
          onChange={handleInputChange}
        />
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
          {results.length > 0 && (
            <div className="imageResult">
              {results.map((result, index) => {
                return (
                  <div className="result" key={result.className}>
                    <span className="name">{result.className}</span>
                    <span className="accuracy">
                      Уровень сходства: {(result.probability * 100).toFixed(2)}%{" "}
                      {index === 0 && (
                        <span className="bestGuess">Наилучшее совпадение</span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          {explicitPhotos.length > 0 && (
            <div className="imageResult">
              {explicitPhotos.map((ex, index) => {
                return (
                  <div className="ex" key={ex.className}>
                    <p
                      className="name"
                      style={{ backgroundColor: "red", color: "#fff" }}
                    >
                      Запрещенка! {ex.className}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
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
