import React from "react";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";

const MenuBox = () => {
  const menuItem = useSelector((state) => state.status.voiceMenu);
  const city = useSelector((state) => state.book.city);
  const hotel = useSelector((state) => state.book.hotel);
  const dispatch = useDispatch();
  var cityChoice, hotelChoice;
  const handleVoice = (item) => {
    const option = item.option || item.label;
    if (item.option) {
      if (option === "cancel") {
        dispatch({ type: "voice", payload: false });
      } else if (option === "logout") {
        dispatch({ type: "logout" });
      } else {
        dispatch({ type: "menuChange", payload: option });
      }
      if (option === "book") {
        dispatch({ type: "voiceMenu", payload: city });
      } else {
        dispatch({ type: "voice", payload: false });
      }
    } else if (!item.cost) {
      cityChoice = item;
      dispatch({ type: "city", payload: cityChoice });
      dispatch({ type: "voiceMenu", payload: hotel });
    } else {
      hotelChoice = item;
      dispatch({ type: "hotel", payload: hotelChoice });
      dispatch({ type: "voice2Start" });
      dispatch({ type: "activeStep", payload: 2 });
      dispatch({ type: "voice", payload: false });
    }
  };
  const menuComp = () => {
    var itemWidth = "40%";
    if (menuItem.length > 12) {
      itemWidth = "10%";
    } else if (menuItem.length > 6) {
      itemWidth = "20%";
    }
    return menuItem.map((item) => {
      if (item.cost !== null) {
        return (
          <CardActionArea
            sx={{
              margin: "2vh",
              width: itemWidth,
              color: "black",
            }}
            onClick={() => {
              handleVoice(item);
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgColor: "red" }}>{1 + Number(item.id)}</Avatar>
              }
              title={item.label}
              subheader={item.cost}
            />
          </CardActionArea>
        );
      }
      return (
        <CardActionArea
          sx={{
            margin: "2vh",
            width: "40%",
            color: "black",
          }}
          onClick={() => {
            handleVoice(item);
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgColor: "red" }}>{1 + Number(item.id)}</Avatar>
            }
            title={item.label}
          />
        </CardActionArea>
      );
    });
  };
  return (
    <Box
      sx={{
        width: "70vw",
        height: "50vh",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          height: "10vh",
          textAlign: "center",
          lineHeight: "225%",
          color: "black",
        }}
      >
        Menu
      </h1>
      <Box
        sx={{
          width: "65vw",
          height: "40vh",
          border: "1px solid black ",
          overflow: "auto",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {menuComp()}
      </Box>
    </Box>
  );
};

export default MenuBox;
