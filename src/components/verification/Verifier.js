import React, { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs-backend-webgl";
import "./Verifier.css";
import CircularProgress from "@mui/material/CircularProgress";
import { limitsOzon } from "./limitsOzon";
import { limitsWB } from "./limitsWB";
import { limitsYM } from "./limitsYM";

const Verifier = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [results, setResults] = useState([]);

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
    const img = document.getElementById("imageDetect");
    const results = await model.classify(img);
    setResults(results);

    setExplicit([]);
    results.forEach((element) => {
      localStorage.getItem("chosMarketPL") == "Ozon" &&
        limitsOzon.forEach((l) => {
          if (
            element.className.toLowerCase().includes(l) &&
            element.probability > 0.3 &&
            (l == "cat" ||
              l == "dog" ||
              l == "hamster" ||
              l == "mouse" ||
              l == "rabbit" ||
              l == "parrot" ||
              l == "snake")
          ) {
            setExplicit((explicitPhotos) => [
              ...explicitPhotos,
              element.className.toLowerCase(),
            ]);
          } else if (element.className.toLowerCase().includes(l)) {
            setExplicit((explicitPhotos) => [
              ...explicitPhotos,
              element.className.toLowerCase(),
            ]);
          }
        });
      localStorage.getItem("chosMarketPL") == "Wildberries" &&
        limitsWB.forEach((l) => {
          if (element.className.toLowerCase().includes(l)) {
            setExplicit((explicitPhotos) => [
              ...explicitPhotos,
              element.className.toLowerCase(),
            ]);
          }
        });
      localStorage.getItem("chosMarketPL") == "Yandex Market" &&
        limitsYM.forEach((l) => {
          if (element.className.toLowerCase().includes(l)) {
            setExplicit((explicitPhotos) => [
              ...explicitPhotos,
              element.className.toLowerCase(),
            ]);
          }
        });
    });
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
        <button
          className="uploadImage"
          onClick={uploadTrigger}
          style={{ margin: "auto" }}
        >
          Загрузить фото
        </button>
      </div>
      <div className="imageWrapper">
        <div className="imageContent">
          <div className="imageArea">
            {imageUrl && (
              <img
                src={imageUrl}
                id="imageDetect"
                crossOrigin="anonymous"
                style={{ height: "250px", width: "200px", margin: "auto" }}
              />
            )}
          </div>
        </div>
        <div>
          {explicitPhotos.length > 0 &&
            explicitPhotos.map((expl) => (
              <p
                key={expl.className}
                style={{
                  color: "red",
                  fontWeight: "600",
                  fontSize: "25px",
                }}
              >
                ЗАПРЕЩЕНКА!!
              </p>
            ))}
          {imageUrl && explicitPhotos.length == 0 && (
            <p style={{ color: "green", fontWeight: "600", fontSize: "35px" }}>
              Все хорошо
            </p>
          )}
        </div>
        {imageUrl && (
          <div style={{ margin: "11%" }}>
            {" "}
            <button className="button" onClick={detectImage}>
              Проверить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verifier;
