import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { useSelector, useDispatch } from "react-redux";

const Book = () => {
  const activeStep = useSelector((state) => state.activeStep.activeStep);
  var setActiveStep = (x, prevActiveStep = activeStep) => {
    if (x === "p") {
      if (prevActiveStep < 2) {
        dispatch({ type: "activeStep", payload: prevActiveStep + 1 });
        return prevActiveStep + 1;
      } else {
        return completeBook(currentHotel);
      }
    }
    if (x === "n") {
      if (prevActiveStep > 0) {
        dispatch({ type: "activeStep", payload: prevActiveStep - 1 });
        return prevActiveStep - 1;
      } else {
        dispatch({ type: "cityHotelNull" });
        return prevActiveStep;
      }
    }
    if (x === "x") {
      dispatch({ type: "activeStep", payload: 0 });
      return 0;
    }
  };
  const [value, setValue] = useState([null, null]);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.booking.city);
  const currentHotel = useSelector((state) => state.booking.hotel);
  const cities = useSelector((state) => state.book.city);
  const hotel = useSelector((state) => state.book.hotel);
  const steps = ["Select A City", "Choose Your Hotel", "Pick A Date"];
  const loggedIn = useSelector((state) => state.status.loggedIn);
  const handleNext = () => {
    if (activeStep === 0 && city === null) {
      alert("Please choose a city!");
      return;
    }
    if (activeStep === 1 && currentHotel.id === "-1") {
      alert("Please pick Your Hotel!");
      return;
    }

    setActiveStep("p");
  };
  const handleClear = () => {
    setValue([null, null]);
  };
  const handleBack = () => {
    setActiveStep("n");
  };
  const handleConfirm = (hotel) => {
    if (!loggedIn) {
      window.alert("Please login to book capsules");
      return;
    }
    dispatch({ type: "hotel", payload: hotel });
  };
  const completeBook = (hotel) => {
    if (value[0] == null || value[1] == null) {
      alert("Please pick a Date!");
      return;
    }
    var text =
      "You decided to book " + hotel.label + " for " + hotel.cost + "/night";
    if (window.confirm(text) === true) {
      window.alert(
        "Thank you for using capsule.\nhere is your receipt:\nCity:  " +
          city.label +
          "\nHotel Name:  " +
          hotel.label +
          "\nCost:  " +
          hotel.cost
      );
    } else {
      setValue([null, null]);
      return 1;
    }
    if (
      window.confirm(
        "Wanna go HOME?\n Click cancel to book more capsules in the same hotel"
      ) === true
    ) {
      setActiveStep("x");
      dispatch({ type: "cityHotelNull", payload: null });
      dispatch({ type: "voice2Start" });
      setValue([null, null]);
      return 0;
    } else {
      setValue([null, null]);
      return 2;
    }
  };
  const StepperComp = () => {
    if (activeStep === 0) {
      return (
        <Autocomplete
          id="combo-box-demo"
          options={cities}
          sx={{ width: "70%" }}
          onChange={(event: any, newValue: string | null) => {
            dispatch({ type: "city", payload: newValue });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              id="outlined-basic"
              label="Choose A City"
              variant="outlined"
              value={city === null ? null : city.label}
            />
          )}
        />
      );
    } else if (activeStep === 1) {
      return (
        <>
          <Box
            sx={{
              width: "60vw",
              height: "50vh",
              backgroundColor: "#c1d6d5",
              borderRadius: "0.5%",
              overflow: "auto",
              display: "flex",
              jsutifyContent: "flex-start",
              flexFlow: "column",
              alignItems: "center",
              border: "8px solid black",
            }}
          >
            <h1
              style={{
                width: "30vw",
                height: "10vh",
                backgroundColor: "white",
                opacity: "0.6",
                textAlign: "center",
                marginTop: "5vh",
                color: "#1f5a80",
              }}
            >
              Book Your Hotel
            </h1>
            <div
              style={{
                display: "inline-flex",
                width: "50vw",
                marginTop: "3vh",
                justifyContent: "center",
              }}
            >
              <CardActionArea
                sx={{
                  width: "52vw",
                  height: "9vh",
                  backgroundColor: "yellow",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgColor: "red" }}>
                      {1 + Number(currentHotel.id)}
                    </Avatar>
                  }
                  title={"You have Selected: " + currentHotel.label}
                  subheader={currentHotel.cost}
                />
              </CardActionArea>
            </div>
            {hotel.map((q) => {
              return (
                <div
                  style={{
                    display: "inline-flex",
                    width: "50vw",
                    marginTop: "3vh",
                    justifyContent: "center",
                  }}
                >
                  <CardActionArea
                    sx={{
                      width: "52vw",
                      height: "9vh",
                      backgroundColor: q === currentHotel ? "#97b0a7" : "white",
                    }}
                    onClick={() => handleConfirm(q)}
                  >
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgColor: "red" }}>
                          {1 + Number(q.id)}
                        </Avatar>
                      }
                      title={q.label}
                      subheader={q.cost}
                    />
                  </CardActionArea>
                </div>
              );
            })}
          </Box>
        </>
      );
    } else {
      return (
        <div>
          <Box
            sx={{
              width: "50vw",
              height: "20vh",
              display: "flex",
              flexFlow: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              {" "}
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                localeText={{ start: "Check-in", end: "Check-out" }}
              >
                <DateRangePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </div>
            <Box
              sx={{
                width: "50vw",
                height: "10vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button variant="contained" onClick={handleClear}>
                Clear
              </Button>
              <Button variant="contained" onClick={handleNext}>
                Submit
              </Button>
            </Box>
          </Box>
        </div>
      );
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "70vw",
          height: "70vh",
          backgroundColor: "#c1d6d5",
          borderRadius: "0.5%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <Stepper sx={{ margin: "3vh", width: "50vw" }} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box
          sx={{
            width: "60vw",
            height: "60vh",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {StepperComp()}
        </Box>
        <span
          style={{
            width: "70vw",
            height: "10vh",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            sx={{ color: "white", margin: "2vh" }}
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ color: "white", margin: "2vh" }}
            onClick={() => {
              handleNext();
            }}
          >
            {activeStep === 2 ? "Book" : "Next"}
          </Button>
        </span>
      </Box>
    </>
  );
};

export default Book;
