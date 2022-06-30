import React from "react";
import "./../../Stylesheets/App.css";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCapsules } from "@fortawesome/free-solid-svg-icons/faCapsules";
const Logo = (props) => {
  return (
    <>
      <Box
        sx={{
          color: props.theme,
          height: "10vh",
          overflow: "hidden",
          textAlign: "center",
          fontSize: "3em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <FontAwesomeIcon icon={faCapsules} />
        <div>{props.title ? props.title : "CAPSY"}</div>
      </Box>
    </>
  );
};

export default Logo;
