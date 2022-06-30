import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const TranscriptBox = (props) => {
  return (
    <Box
      sx={{
        width: "70vw",
        height: "30vh",
        background: "black",
      }}
    >
      <Box
        sx={{
          width: "70vw",
          height: "18vh",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{
            width: "96%",
            marginTop: "5vh",
            height: "18vh",
          }}
          id="outlined-basic"
          label="Transcript"
          variant="outlined"
          value={props.transcript}
        />
      </Box>
      <Box sx={{ width: "70vw", height: "12vh" }}>
        <Box
          sx={{
            width: "70vw",
            height: "4vh",
            textAlign: "center",
            backgroundColor: "#e8de6b",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Say "Hold on!!" to add more Listening time...
        </Box>
        <Box
          sx={{
            width: "70vw",
            height: "8vh",
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Please repeat if no response,until its clear for CAPSY TO LISTEN...
        </Box>
      </Box>
    </Box>
  );
};

export default TranscriptBox;
