import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  CardActionArea,
  CardHeader,
  IconButton,
  CardActions,
  Tooltip,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import Divider from "@mui/material/Divider";

const MainpartCreatives = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <div>
      {" "}
      <Box sx={{ display: "flex", padding: "70px" }}>
        <Box
          sx={{ display: "flex", flexDirection: "column", marginRight: "50px" }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontSize: "50px",
              fontWeight: "500",
              textAlign: "left",
              marginTop: "30px",
            }}
          >
            Мои проекты
          </Typography>

          <Box sx={{ marginTop: "50px" }}>
            <Fab variant="extended">
              <AddIcon sx={{ width: "20px", marginRight: "6px" }} />
              Создать новый проект
            </Fab>
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <Fab variant="extended">
              <FolderIcon sx={{ width: "20px", marginRight: "6px" }} />
              Создать новую папку
            </Fab>
          </Box>
          <Box sx={{ marginTop: "80px" }}>
            {" "}
            <Divider light textAlign="left" />
          </Box>
          <Box sx={{ marginTop: "30px", marginLeft: "30px" }}>
            <Button variant="contained" color="secondary">
              <FolderSpecialIcon
                sx={{ width: "20px", marginRight: "6px", marginBottom: "2px" }}
              />
              Мои проекты
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginLeft: "90px", marginTop: "110px" }}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {isHovered ? (
                <>
                  {" "}
                  <Tooltip
                    title={<Typography fontSize={15}>1 месяц назад</Typography>}
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: "offset",
                            options: {
                              offset: [0, -10],
                            },
                          },
                        ],
                      },
                    }}
                  >
                    {" "}
                    <CardMedia
                      component="img"
                      width="350px"
                      height="400px"
                      image="1-1001.jpg"
                      sx={{
                        "&:hover": {
                          "*": "inherit", // Nope. Code does not go here.
                        },
                      }}
                    />
                  </Tooltip>
                </>
              ) : (
                <CardMedia
                  component="img"
                  width="350px"
                  height="400px"
                  image="1-1001.jpg"
                  sx={{
                    "&:hover": {
                      "*": "inherit", // Nope. Code does not go here.
                    },
                  }}
                />
              )}
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{ marginLeft: "90px", marginTop: "110px" }}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {isHovered ? (
                <>
                  {" "}
                  <Tooltip
                    title={<Typography fontSize={15}>3 дня назад</Typography>}
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: "offset",
                            options: {
                              offset: [0, -10],
                            },
                          },
                        ],
                      },
                    }}
                  >
                    {" "}
                    <CardMedia
                      component="img"
                      width="350px"
                      height="400px"
                      image="1-2001.jpg"
                      sx={{
                        "&:hover": {
                          "*": "inherit", // Nope. Code does not go here.
                        },
                      }}
                    />
                  </Tooltip>
                </>
              ) : (
                <CardMedia
                  component="img"
                  width="350px"
                  height="400px"
                  image="1-2001.jpg"
                  sx={{
                    "&:hover": {
                      "*": "inherit", // Nope. Code does not go here.
                    },
                  }}
                />
              )}
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default MainpartCreatives;
