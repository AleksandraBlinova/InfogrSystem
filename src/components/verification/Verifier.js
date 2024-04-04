import React, { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs-backend-webgl";
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

const Verifier = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [loadingTextRecogn, setLoadingTextRecogn] = useState(false);
  const [loadingPhotoDetect, setLoadingPhotoDetect] = useState(false);
  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [results, setResults] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const [textStatus, setTextStatus] = useState("");

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
              .replace(/[®@{}|]/g, " ")
              .replace(/[^a-zA-Za-яА-Я0-9]/g, " ")
          : result.data.text;
        setTextStatus(text2);
        setLoadingTextRecogn(false);
      });
  };

  const detectImage = async () => {
    setLoadingPhotoDetect(true);
    const img = document.getElementById("imageDetect");
    const results = await model.classify(img);
    setResults(results);
    setExplicit([]);
    setStatusDetection("true");
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
            setExplicitCategory("Живые животные");
          } else if (element.className.toLowerCase().includes(l)) {
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
              l == "medicine"
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
          if (element.className.toLowerCase().includes(l)) {
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
            l == "medicine"
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
          if (element.className.toLowerCase().includes(l)) {
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
          {explicitPhotos.length > 0 && (
            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle
                id="alert-dialog-title"
                sx={{ fontWeight: "600", color: "red" }}
              >
                {" Предупреждение! "}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography sx={{ color: "#000" }}>
                    Данный товар попадает под одну из категорий:{" "}
                  </Typography>
                  <br></br>
                  <Typography
                    sx={{ color: "#000", fontWeight: "600", fontSize: "18px" }}
                  >
                    {explicitCategory}
                  </Typography>
                  <br></br>
                  <Typography
                    sx={{ color: "#000", color: "red", fontSize: "16px" }}
                  >
                    Данная категория запрещена на маркетплейсе{" "}
                    {localStorage.getItem("chosMarketPL")}
                  </Typography>
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
          {(loadingPhotoDetect || loadingTextRecogn) && (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={!(loadingTextRecogn && loadingPhotoDetect)}
            >
              <CircularProgress color="secondary" />
            </Backdrop>
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
                  sx={{ fontWeight: "600", color: "green" }}
                >
                  {" Статус: "}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Typography sx={{ color: "#000" }}>
                      Категория товара разрешена
                    </Typography>
                    <br></br>
                    <Typography sx={{ color: "#000" }}>{textStatus}</Typography>
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
