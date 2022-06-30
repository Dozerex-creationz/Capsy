import React from "react";
import "./../Stylesheets/App.css";
import Box from "@mui/material/Box";
import Menu from "./TopBarComponents/Menu";
import Profile from "./TopBarComponents/Profile";
import Logo from "./TopBarComponents/Logo.js";
import VoiceRec from "./VoiceRec";
const TopBar = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Menu />
        <Logo theme={"white"} />
        <Profile />
        <VoiceRec />
      </Box>
    </div>
  );
};

export default TopBar;
