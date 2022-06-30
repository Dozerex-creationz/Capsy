import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SignIn from "./SignIn";
import { useDispatch, useSelector } from "react-redux";
const returnProfile = (loggedIn, dispatch, open, handleClose) => {
  if (loggedIn) {
    return (
      <IconButton
        aria-label="person-outline"
        sx={{ marginRight: "1vw", position: "relative" }}
        onClick={() => {
          dispatch({ type: "menuChange", payload: "history" });
        }}
      >
        <AccountCircleIcon sx={{ fontSize: 50 }} />
      </IconButton>
    );
  } else {
    return (
      <>
        <Button
          variant="contained"
          sx={{ marginRight: "1vw", position: "relative" }}
          onClick={() => {
            dispatch({ type: "signOpen", payload: true });
          }}
        >
          Sign Up
        </Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
          open={open}
        >
          <SignIn handleClose={handleClose} />
        </Backdrop>
      </>
    );
  }
};
const Profile = () => {
  const open = useSelector((state) => state.status.signOpen);
  const loggedIn = useSelector((state) => state.status.loggedIn);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({ type: "signOpen", payload: false });
  };

  return <Box>{returnProfile(loggedIn, dispatch, open, handleClose)}</Box>;
};

export default Profile;
