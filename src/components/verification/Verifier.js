import React, { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs-backend-cpu";
import "./Verifier.css";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Backdrop, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { limitsOzon } from "./limitsOzon";
import { limitsWB } from "./limitsWB";
import { limitsYM } from "./limitsYM";
import Tesseract from "tesseract.js";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import "dear-image.detect-background-color";
import DearImage from "dear-image";
import { electronics } from "./electronics";

const Verifier = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [loadingTextRecogn, setLoadingTextRecogn] = useState(false);
  const [loadingPhotoDetect, setLoadingPhotoDetect] = useState(false);
  const [loadingDetectBG, setLoadingDetectBG] = useState(false);
  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [results, setResults] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const [textStatus, setTextStatus] = useState("");

  const [stopwords, setStopWords] = useState([]);

  const [backgroundDetection, setBackgroundDetection] = useState("");
  const [backgroundDetectionRes, setBackgroundDetectionRes] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/stop_words",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setStopWords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [statusDetection, setStatusDetection] = useState("");

  const uploadImage = (e) => {
    const { files } = e.target;

    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }
  };

  const loadModel = async () => {
    setIsModelLoading(true);
    if (mobilenet) {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } else {
      console.log("error");
      setIsModelLoading(false);
    }
  };
  let [explicitPhotos, setExplicit] = useState([]);
  let [explicitCategory, setExplicitCategory] = useState("");

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

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const recognizeTextFromPhoto = async () => {
    setTextStatus(null);
    setLoadingTextRecogn(true);
    await Tesseract.recognize(imageUrl, "rus", {
      logger: (m) => m,
    })
      .catch((err) => {
        console.error(err);
        setLoadingTextRecogn(false);
      })
      .then((result) => {
        // Get Confidence score
        let confidence = result.confidence;
        let text = result.data.text;
        let text2 = result.data.text
          ? result.data.text
              .replace(/\n\s*\n/g, "\n")
              .replace(/[®@{}|©«»°1234567890]/g, "")
              .replace(/[^a-zA-Za-яА-Я0-9]/g, " ")
          : result.data.text;
        stopwords.forEach((i) => {
          if (text2 && text2.includes(i.Stopword_name))
            setTextStatus(
              "Проверка на стоп-слова не пройдена. Слово, не прошедшее модерацию:" +
                i.Stopword_name
            );
          else {
            setTextStatus("Проверка на стоп-слова пройдена");
          }
        });
        setLoadingTextRecogn(false);
      });
  };

  const detectBackgroundColor = async (res) => {
    const img = document.getElementById("imageDetect");
    let backgroundColor = await DearImage.detectBackgroundColor(img);
    setBackgroundDetection(backgroundColor);
    localStorage.getItem("chosMarketPL") == "Ozon" &&
      backgroundColor &&
      res &&
      electronics.forEach((i) => {
        res.forEach((element) => {
          if (
            element &&
            element.className &&
            element.className.toLowerCase().includes(i)
          ) {
            setLoadingDetectBG(true);
            if (backgroundColor) {
              if (isLightColor(backgroundColor)) {
                setBackgroundDetectionRes("светлый");
                setLoadingDetectBG(false);
              } else {
                setBackgroundDetectionRes("темный");
                setLoadingDetectBG(false);
              }
            }
          }
        });
      });
  };
  const detectImage = async () => {
    setLoadingPhotoDetect(true);
    const img = document.getElementById("imageDetect");
    const results = await model.classify(img);
    setResults(results);
    detectBackgroundColor(results);
    setExplicit([]);
    setStatusDetection("true");
    results.forEach((element) => {
      localStorage.getItem("chosMarketPL") == "Ozon" &&
        limitsOzon.forEach((l) => {
          if (
            element &&
            element.className &&
            element.className.toLowerCase().includes(l) &&
            element.probability > 0.3 &&
            (l == "cat" ||
              l == "dog" ||
              l == "hamster" ||
              l == "mouse" ||
              l == "Tinca tinca" ||
              l == "goldfish" ||
              l == "great white shark" ||
              l == "rabbit" ||
              l == "tiger shark" ||
              l == "hammerhead" ||
              l == "electric ray" ||
              l == "stingray" ||
              l == "ostrich" ||
              l == "goldfinch" ||
              l == "spider" ||
              l == "monkey" ||
              l == "polecat" ||
              l == "parrot" ||
              l == "snake")
          ) {
            setExplicit((explicitPhotos) => [
              ...explicitPhotos,
              element.className.toLowerCase(),
            ]);
            setExplicitCategory("Живые животные");
          } else if (
            element &&
            element.className &&
            element.className.toLowerCase().includes(l)
          ) {
            setExplicit((explicitPhotos) => [
              ...explicitPhotos,
              element.className.toLowerCase(),
            ]);
            if (
              l == "gun" ||
              l == "revolver" ||
              l == "shoot" ||
              l == "rifle" ||
              l == "cannon" ||
              l == "weapon" ||
              l == "pistol" ||
              l == "mortar" ||
              l == "torpedo" ||
              l == "missile" ||
              l == "ammunition" ||
              l == "bullet" ||
              l == "grenade" ||
              l == "bomb" ||
              l == "explos"
            )
              setExplicitCategory("Вооружение, боеприпасы");
            else if (
              l == "wine" ||
              l == "beer" ||
              l == "alcohol" ||
              l == "liqueur" ||
              l == "cognac" ||
              l == "rum" ||
              l == "gin" ||
              l == "champagne" ||
              l == "whisky" ||
              l == "sherry" ||
              l == "tequila" ||
              l == "madeira"
            )
              setExplicitCategory("Алкогольная продукция");
            else if (
              l == "traffic light" ||
              l == "traffic signal" ||
              l == "stoplight"
            )
              setExplicitCategory("Дорожные знаки");
            else if (
              l == "drug" ||
              l == "aid" ||
              l == "pill bottle" ||
              l == "pills" ||
              l == "nipple" ||
              l == "vitamin" ||
              l == "medicine" ||
              l == "ambulance"
            )
              setExplicitCategory(
                "Ветеринарные препараты, или Витамины для животных, или Лекарственные средства, или Наркотические средства, психотропные вещества и их прекурсоры"
              );
            else if (
              l == "gunpowder" ||
              l == "detonat" ||
              l == "armament" ||
              l == "burst" ||
              l == "implos" ||
              l == "blast"
            )
              setExplicitCategory(
                "Взрывчатые вещества, средства взрывания, порох"
              );
            else if (
              l == "igniter" ||
              l == "ignitor" ||
              l == "cigaret" ||
              l == "lighter" ||
              l == "tobacco shop" ||
              l == "tobacconist shop" ||
              l == "tobacconist" ||
              l == "tobacco" ||
              l == "spray" ||
              l == "tam-tam"
            )
              setExplicitCategory(
                "Табачная и никотинсодержащая продукция, или Легковоспламеняющиеся жидкости и вещества, или Самовозгорающиеся вещества"
              );
            else if (l == "poison") setExplicitCategory("Яды");
          }
        });
      localStorage.getItem("chosMarketPL") == "Wildberries" &&
        limitsWB.forEach((l) => {
          if (
            element &&
            element.className &&
            element.className.toLowerCase().includes(l)
          ) {
            setExplicit((explicitPhotos) => [
              ...explicitPhotos,
              element.className.toLowerCase(),
            ]);
          }

          if (
            l == "gun" ||
            l == "revolver" ||
            l == "shoot" ||
            l == "rifle" ||
            l == "cannon" ||
            l == "weapon" ||
            l == "pistol" ||
            l == "mortar" ||
            l == "torpedo" ||
            l == "missile" ||
            l == "ammunition" ||
            l == "bullet" ||
            l == "grenade" ||
            l == "bomb" ||
            l == "explos"
          )
            setExplicitCategory("Вооружение, боеприпасы");
          else if (
            l == "drug" ||
            l == "aid" ||
            l == "pill bottle" ||
            l == "pills" ||
            l == "nipple" ||
            l == "vitamin" ||
            l == "medicine" ||
            l == "ambulance"
          )
            setExplicitCategory("Медицинские товары");
          else if (
            l == "gunpowder" ||
            l == "detonat" ||
            l == "armament" ||
            l == "burst" ||
            l == "implos" ||
            l == "blast"
          )
            setExplicitCategory(
              "Взрывчатые вещества, средства взрывания, порох"
            );
          else if (
            l == "igniter" ||
            l == "ignitor" ||
            l == "cigaret" ||
            l == "lighter" ||
            l == "tobacco shop" ||
            l == "tobacconist shop" ||
            l == "tobacconist" ||
            l == "tobacco" ||
            l == "spray" ||
            l == "tam-tam"
          )
            setExplicitCategory(
              "Взрывчатые вещества, или Никотиносодержащая продукция, или Легковоспламеняющиеся жидкости и вещества, или Самовозгорающиеся вещества"
            );
          else if (l == "poison") setExplicitCategory("Яды");
        });
      localStorage.getItem("chosMarketPL") == "Yandex Market" &&
        limitsYM.forEach((l) => {
          if (
            element &&
            element.className &&
            element.className.toLowerCase().includes(l)
          ) {
            setExplicit((explicitPhotos) => [
              ...explicitPhotos,
              element.className.toLowerCase(),
            ]);
          }
          if (
            l == "gun" ||
            l == "revolver" ||
            l == "shoot" ||
            l == "rifle" ||
            l == "cannon" ||
            l == "weapon" ||
            l == "pistol" ||
            l == "mortar" ||
            l == "torpedo" ||
            l == "missile" ||
            l == "ammunition" ||
            l == "bullet" ||
            l == "grenade" ||
            l == "bomb" ||
            l == "explos"
          )
            setExplicitCategory("Любые виды оружия");
          else if (
            l == "gunpowder" ||
            l == "detonat" ||
            l == "armament" ||
            l == "burst" ||
            l == "implos" ||
            l == "blast"
          )
            setExplicitCategory(
              "Взрывчатые вещества, средства взрывания, порох"
            );
          else if (
            l == "igniter" ||
            l == "ignitor" ||
            l == "cigaret" ||
            l == "tobacco shop" ||
            l == "tobacconist shop" ||
            l == "tobacconist" ||
            l == "tobacco" ||
            l == "lighter" ||
            l == "spray" ||
            l == "tam-tam"
          )
            setExplicitCategory(
              "Взрывчатые вещества, или Никотиносодержащая продукция, или Легковоспламеняющиеся жидкости и вещества, или Самовозгорающиеся вещества"
            );
          else if (l == "poison") setExplicitCategory("Яды");
          else if (l == "daisy" || l == "garden" || l == "cactus")
            setExplicitCategory("Живые цветы и растения");
        });
    });

    setLoadingPhotoDetect(false);
  };

  function isLightColor(hex) {
    //для определения того, является ли цвет светлым
    // Получаем значения HSP компонентов
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Вычисление значения HSP
    let brightness = Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
    // Проверка на светлый цвет
    if (brightness > 127.5) {
      return true;
    } else {
      return false;
    }
  }

  const UploadControl = ({ children, value, onChange, disabled, accept }) => {
    return (
      <label htmlFor="contained-button-file" className="m-0 w-100">
        <input
          value={value}
          accept={accept}
          disabled={disabled}
          style={{ display: "none" }}
          id="contained-button-file"
          multiple
          type="file"
          onChange={disabled ? () => {} : onChange}
        />
        {children}
      </label>
    );
  };

  return (
    <div>
      <div>
        <Button
          className="btn-styles"
          sx={{
            backgroundColor: "#3c3d37",
            color: "#fff",
            borderRadius: "0px",
            marginLeft: "18%",
            marginRight: "18%",
            marginTop: "30px",
            "&:hover": {
              backgroundColor: "#3c3d37",
              color: "#fff",
            },
          }}
        >
          <UploadControl onChange={uploadImage} accept="image/*">
            Загрузить фото
          </UploadControl>
        </Button>
      </div>
      <div className="inputField"></div>
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
          {(loadingPhotoDetect || loadingTextRecogn || loadingDetectBG) &&
            explicitPhotos.length == 0 && (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={
                  !(loadingTextRecogn && loadingPhotoDetect && loadingDetectBG)
                }
              >
                <CircularProgress color="secondary" />
              </Backdrop>
            )}
          {explicitPhotos.length > 0 && (
            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle
                id="alert-dialog-title"
                sx={{ fontWeight: "600", color: "#000" }}
              >
                {" Результат проверки: "}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography sx={{ color: "#000" }}>
                    <CheckCircleIcon
                      sx={{
                        color: "green",
                        marginRight: "5px",
                        fontSize: "20px",
                        marginBottom: "-4px",
                      }}
                    />
                    Расширение допустимое
                  </Typography>
                  <Typography sx={{ color: "#000" }}>
                    <CheckCircleIcon
                      sx={{
                        color: "green",
                        marginRight: "5px",
                        fontSize: "20px",
                        marginBottom: "-4px",
                      }}
                    />
                    Разрешение подходящее
                  </Typography>
                  <Typography sx={{ color: "#000" }}>
                    <CheckCircleIcon
                      sx={{
                        color: "green",
                        marginRight: "5px",
                        fontSize: "20px",
                        marginBottom: "-4px",
                      }}
                    />
                    Формат подходящий{" "}
                  </Typography>
                  <Typography sx={{ color: "#000" }}>
                    <CheckCircleIcon
                      sx={{
                        color: "green",
                        marginRight: "5px",
                        fontSize: "20px",
                        marginBottom: "-4px",
                      }}
                    />
                    Размер соответствует{" "}
                  </Typography>

                  <Typography
                    sx={{ color: "#000", color: "red", fontSize: "16px" }}
                  >
                    <ErrorIcon
                      sx={{
                        color: "red",
                        marginRight: "5px",
                        fontSize: "20px",
                        marginBottom: "-4px",
                      }}
                    />
                    Проверка по категории не пройдена. Данный товар попадает под
                    одну из категорий: "{explicitCategory}". Категория запрещена
                    на маркетплейсе {localStorage.getItem("chosMarketPL")}!
                  </Typography>
                  {textStatus &&
                  textStatus != "" &&
                  textStatus.includes("Проверка на стоп-слова пройдена") ? (
                    <Typography sx={{ color: "#000" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "20px",
                          marginBottom: "-4px",
                        }}
                      />
                      {textStatus}
                    </Typography>
                  ) : (
                    <Typography sx={{ color: "#000" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "red",
                          marginRight: "5px",
                          fontSize: "20px",
                          marginBottom: "-4px",
                        }}
                      />
                      {textStatus}
                    </Typography>
                  )}
                  {localStorage.getItem("chosMarketPL") == "Ozon" && (
                    <Typography sx={{ color: "#000" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "20px",
                          marginBottom: "-4px",
                        }}
                      />
                      Цвет фона соответствует
                    </Typography>
                  )}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  variant="contained"
                  sx={{
                    backgroundColor: "purple",
                    "&:hover": {
                      backgroundColor: "purple",
                    },
                  }}
                  onClick={handleCloseDialog}
                >
                  Ок
                </Button>

                <Button
                  sx={{
                    color: "#fff",
                    backgroundColor: "grey",
                    "&:hover": {
                      backgroundColor: "grey",
                    },
                  }}
                  onClick={handleCloseDialog}
                >
                  Назад
                </Button>
              </DialogActions>
            </Dialog>
          )}

          {imageUrl &&
            explicitPhotos.length == 0 &&
            statusDetection == "true" &&
            textStatus && (
              <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle
                  id="alert-dialog-title"
                  sx={{ fontWeight: "600", color: "#000" }}
                >
                  {" Результат проверки: "}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Typography sx={{ color: "#000" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "20px",
                          marginBottom: "-4px",
                        }}
                      />
                      Расширение допустимое
                    </Typography>
                    <Typography sx={{ color: "#000" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "20px",
                          marginBottom: "-4px",
                        }}
                      />
                      Разрешение подходящее
                    </Typography>
                    <Typography sx={{ color: "#000" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "20px",
                          marginBottom: "-4px",
                        }}
                      />
                      Формат подходящий{" "}
                    </Typography>
                    <Typography sx={{ color: "#000" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "20px",
                          marginBottom: "-4px",
                        }}
                      />
                      Размер соответствует{" "}
                    </Typography>

                    <Typography sx={{ color: "#000" }}>
                      <CheckCircleIcon
                        sx={{
                          color: "green",
                          marginRight: "5px",
                          fontSize: "20px",
                          marginBottom: "-4px",
                        }}
                      />
                      Категория товара разрешена
                    </Typography>

                    {textStatus &&
                    textStatus != "" &&
                    textStatus.includes("Проверка на стоп-слова пройдена") ? (
                      <Typography sx={{ color: "#000" }}>
                        <CheckCircleIcon
                          sx={{
                            color: "green",
                            marginRight: "5px",
                            fontSize: "20px",
                            marginBottom: "-4px",
                          }}
                        />
                        {textStatus}
                      </Typography>
                    ) : (
                      <Typography sx={{ color: "#000" }}>
                        <CheckCircleIcon
                          sx={{
                            color: "red",
                            marginRight: "5px",
                            fontSize: "20px",
                            marginBottom: "-4px",
                          }}
                        />
                        {textStatus}
                      </Typography>
                    )}
                    {localStorage.getItem("chosMarketPL") == "Ozon" &&
                      backgroundDetectionRes &&
                      backgroundDetectionRes == "светлый" && (
                        <Typography sx={{ color: "#000" }}>
                          <CheckCircleIcon
                            sx={{
                              color: "green",
                              marginRight: "5px",
                              fontSize: "20px",
                              marginBottom: "-4px",
                            }}
                          />
                          Цвет фона соответствует
                        </Typography>
                      )}
                    {localStorage.getItem("chosMarketPL") == "Ozon" &&
                      backgroundDetectionRes &&
                      backgroundDetectionRes == "темный" && (
                        <Typography sx={{ color: "#000" }}>
                          <CheckCircleIcon
                            sx={{
                              color: "red",
                              marginRight: "5px",
                              fontSize: "20px",
                              marginBottom: "-4px",
                            }}
                          />
                          Цвет фона не соответствует: фон должен быть светлый
                          для категории "Электроника"
                        </Typography>
                      )}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    autoFocus
                    variant="contained"
                    sx={{
                      backgroundColor: "purple",
                      "&:hover": {
                        backgroundColor: "purple",
                      },
                    }}
                    onClick={handleCloseDialog}
                  >
                    Ок
                  </Button>

                  <Button
                    sx={{
                      color: "#fff",
                      backgroundColor: "grey",
                      "&:hover": {
                        backgroundColor: "grey",
                      },
                    }}
                    onClick={handleCloseDialog}
                  >
                    Назад
                  </Button>
                </DialogActions>
              </Dialog>
            )}
        </div>

        {imageUrl && (
          <>
            <div style={{ margin: "11%" }}>
              {" "}
              <button
                className="button"
                onClick={() => {
                  detectImage();
                  handleClickOpenDialog();
                  recognizeTextFromPhoto();
                }}
              >
                Проверить
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Verifier;
