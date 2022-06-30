import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";

const handleGoogleCallBack = () => {};

const initGoogle = () => {
  /*global google*/
  google.accounts.id.initialize({
    client_id: "hehehe",
    callback: handleGoogleCallBack,
  });
  google.accounts.id.renderButton(document.getElementById("login"), {
    theme: "outline",
    size: "large",
  });
};

const SignIn = (props) => {
  const [value, setValue] = React.useState("0");
  const dispatch = useDispatch();
  const details = (type, props, setValue) => {
    if (type === "sign") {
      return (
        <>
          <Box
            sx={{
              width: "20vw",
              height: "38vh",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{ width: "100%", marginTop: "5vh" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%", marginBottom: "5vh" }}
              id="outlined-password-input"
              label="Password"
              variant="outlined"
            />
            <Button
              sx={{ color: "white" }}
              variant="contained"
              onClick={() => {
                setValue("0");
                dispatch({ type: "logIn", payload: true });
                props.handleClose();
              }}
            >
              Submit
            </Button>
          </Box>
        </>
      );
    } else {
      return (
        <>
          <Box
            sx={{
              width: "20vw",
              height: "38vh",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{ width: "100%", marginTop: "3vh" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%", marginTop: "3vh" }}
              id="outlined-password-input"
              label="Password"
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%", marginTop: "3vh" }}
              id="outlined-password-input"
              label="Confirm Password"
              variant="outlined"
            />
            <Button
              sx={{ color: "white" }}
              variant="contained"
              onClick={() => {
                props.handleClose();
                setValue("0");
              }}
            >
              Submit
            </Button>
          </Box>
        </>
      );
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const escapeHandler = (event) => {
    if (event.key === "Escape") {
      props.handleClose();
      setValue("0");
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", escapeHandler);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    initGoogle();
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        width: "25vw",
        backgroundColor: "white",
        borderRadius: "1%",
        border: "3px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <TabContext value={value} sx={{ height: "50vh" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sign Up" value="0" />
            <Tab label="Log In" value="1" />
          </TabList>
        </Box>
        <TabPanel value="0">{details("sign", props, setValue)}</TabPanel>
        <TabPanel value="1">{details("log", props, setValue)}</TabPanel>
      </TabContext>
      <Divider />
      <div id="login"></div>
      <Button
        sx={{ color: "red", marginTop: "2vh" }}
        onClick={() => {
          props.handleClose();
          setValue("0");
        }}
      >
        Close
      </Button>
    </Box>
  );
};

export default SignIn;
