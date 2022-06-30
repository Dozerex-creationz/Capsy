import React from "react";
import Box from "@mui/material/Box";
import Book from "./ContentComponents/Book";
import Details from "./ContentComponents/Details";
import Help from "./ContentComponents/Help";
import History from "./ContentComponents/History";
import { useSelector } from "react-redux";
const returnTab = (currentMenu) => {
  if (currentMenu === "book") {
    return <Book />;
  } else if (currentMenu === "details") {
    return <Details />;
  } else if (currentMenu === "history") {
    return <History />;
  } else if (currentMenu === "help") {
    return <Help />;
  }
};
const Contents = () => {
  const currentMenu = useSelector((state) => {
    return state.status.currentMenu;
  });
  return (
    <div>
      <Box
        sx={{
          width: "99vw",
          height: "89vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {returnTab(currentMenu)}
      </Box>
    </div>
  );
};

export default Contents;
