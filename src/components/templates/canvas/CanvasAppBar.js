import React from "react";
import {
  Grid,
  Typography,
  ButtonGroup,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";

const CanvasAppBar = (props) => {
  return (
    <div>
      <Grid container spacing={3} p={2}>
        <Grid item xs={4} sx={{ marginTop: "10px" }}>
          <Input
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              width: "150px",
              borderLeft: "1px solid grey",
              borderTop: "1px solid grey",
              borderRight: "1px solid grey",
              paddingLeft: "10px",
            }}
            onChange={props.handleChangeInputNameofStage}
            defaultValue={props.curInputNameofStage}
          />
        </Grid>
        <Grid item xs sx={{ marginTop: "10px" }}>
          <Typography sx={{ borderBottom: "1px dashed #000", width: "150px" }}>
            Размер: 1260*1740
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ marginTop: "-5px" }}>
          <FormControl>
            <FormLabel
              sx={{
                borderBottom: "1px dashed #000",
                width: "150px",
                color: "#000",
                textAlign: "center",
                "&.Mui-focused": {
                  color: "#000",
                },
              }}
            >
              Расширение:
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={props.valueSelectedJpegPng}
              onChange={props.handleChangeSelectedJpegPng}
            >
              <FormControlLabel
                value="png"
                control={
                  <Radio
                    sx={{
                      color: "grey",
                      "&.Mui-checked": {
                        color: "#aa00ff",
                      },
                    }}
                  />
                }
                label="PNG"
              />
              <FormControlLabel
                value="jpeg"
                control={
                  <Radio
                    sx={{
                      color: "grey",
                      "&.Mui-checked": {
                        color: "#aa00ff",
                      },
                    }}
                  />
                }
                label="JPEG"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs>
          <Typography>
            {" "}
            <Button
              sx={{
                borderRadius: "0px",
                width: "100px",
                color: "#616161",
                border: "1px solid #616161",
                marginRight: "20px",
                "&:hover": {
                  color: "#aa00ff",
                  border: "1px solid #aa00ff",
                },
              }}
              onClick={props.handleSaveImage}
            >
              Скачать
            </Button>
            <Tooltip
              title="Telegram"
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -14],
                      },
                    },
                  ],
                },
              }}
            >
              <IconButton
                onClick={() => {
                  window.open("https://t.me/share?url=" + window.location.href);
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "inherit",
                  },
                }}
              >
                <TelegramIcon
                  sx={{
                    fontSize: "30px",
                    color: "#616161",
                    "&:hover": {
                      color: "#aa00ff",
                      backgroundColor: "inherit",
                    },
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Whatsapp"
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -14],
                      },
                    },
                  ],
                },
              }}
            >
              <IconButton
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?text=" + window.location.href
                  );
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "inherit",
                  },
                }}
              >
                <WhatsAppIcon
                  sx={{
                    fontSize: "30px",
                    color: "#616161",
                    "&:hover": {
                      color: "#aa00ff",
                      backgroundColor: "inherit",
                    },
                  }}
                />
              </IconButton>
            </Tooltip>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CanvasAppBar;
