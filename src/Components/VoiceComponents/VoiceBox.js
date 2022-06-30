import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuBox from "./MenuBox";
import TranscriptBox from "./TranscriptBox";
import { useDispatch } from "react-redux";
const VoiceBox = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          width: "70vw",
          height: "80vh",
          background: "white",
          borderRadius: "1%",
          overflow: "hidden",
          opacity: "0.85",
        }}
      >
        <IconButton
          aria-label="person-outline"
          sx={{
            backgroundColor: "red",
            color: "white",
            opacity: "0.9",
            zIndex: "3",
            position: "absolute",
            top: "9vh",
            right: "14vw",
            float: "right",
            overflow: "hidden",
          }}
          onClick={() => {
            dispatch({ type: "voice", payload: false });
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <MenuBox />
        <TranscriptBox transcript={props.transcript} />
      </Box>
    </>
  );
};

export default VoiceBox;
