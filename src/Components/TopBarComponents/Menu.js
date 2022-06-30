import React, { useState, useEffect } from "react";
import "./../../Stylesheets/App.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AirlineSeatIndividualSuiteRoundedIcon from "@mui/icons-material/AirlineSeatIndividualSuiteRounded";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Logo from "./Logo.js";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [menuBg, setMenuBg] = useState([
    "#a8aaad",
    "#d3dceb",
    "#d3dceb",
    "#d3dceb",
  ]);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.status.loggedIn);
  const currentMenu = useSelector((state) => state.status.currentMenu);
  const formulateArr = (id) => {
    const arr = ["#d3dceb", "#d3dceb", "#d3dceb", "#d3dceb"];
    arr[id] = "#a8aaad";
    return arr;
  };
  useEffect(() => {
    var id;
    switch (currentMenu) {
      case "book": {
        id = 0;
        break;
      }
      case "details": {
        id = 1;
        break;
      }
      case "history": {
        id = 2;
        break;
      }
      case "help": {
        id = 3;
        break;
      }
      default: {
        id = 0;
      }
    }
    var arr = formulateArr(id);
    setMenuBg(arr);
  }, [currentMenu]);

  const menuItem = (id, title, icon, disp) => {
    return (
      <>
        <Button
          sx={{
            backgroundColor: menuBg[id],
            padding: "2vw",
            margin: "1vw",
            width: "20vw",
            height: "5vh",
          }}
          onClick={() => {
            if (loggedIn) {
              dispatch({ type: "menuChange", payload: disp });
              setOpen(false);
            } else {
              setOpen(false);
              dispatch({ type: "signOpen", payload: true });
            }
          }}
        >
          {icon}
          {title}
        </Button>
        <Divider />
      </>
    );
  };
  return (
    <div>
      <Button
        sx={{ color: "#d3dceb" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuRoundedIcon />
      </Button>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Logo theme={"black"} />
        {menuItem(
          0,
          "Book Capsules",
          <AirlineSeatIndividualSuiteRoundedIcon />,
          "book"
        )}
        {menuItem(1, "Your Bookings", <LocalActivityIcon />, "details")}
        {/* {menuItem(2, "Your Profile", <AccountBoxIcon />, "history")} */}
        {menuItem(3, "Help & FAQ", <HelpCenterRoundedIcon />, "help")}
      </Drawer>
    </div>
  );
};

export default Menu;
