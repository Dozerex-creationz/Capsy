import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
const History = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box
        sx={{
          width: "70vw",
          height: "70vh",
          backgroundColor: "#d6c1c1",
          borderRadius: "0.5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <Box
          sx={{
            width: "63vw",
            height: "56vh",
            marginTop: "7vh",
            borderRadius: "0.5%",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              width: "63vw",
              marginTop: "3vh",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "52vw",
                height: "9vh",
              }}
            >
              <CardHeader
                avatar={<Avatar sx={{ bgColor: "red" }}>N</Avatar>}
                title="Name"
                subheader="Dummy"
              />
            </Card>
          </div>
          <div
            style={{
              display: "inline-flex",
              width: "63vw",
              marginTop: "3vh",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "52vw",
                height: "9vh",
              }}
            >
              <CardHeader
                avatar={<Avatar sx={{ bgColor: "red" }}>E</Avatar>}
                title="Email"
                subheader="Dummy@gmail.com"
              />
            </Card>
          </div>
          <div
            style={{
              display: "inline-flex",
              width: "63vw",
              marginTop: "3vh",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "52vw",
                height: "9vh",
              }}
            >
              <CardHeader
                avatar={<Avatar sx={{ bgColor: "red" }}>X</Avatar>}
                title="X-Points earned"
                subheader="23450 Xp"
              />
            </Card>
          </div>
          <div
            style={{
              display: "inline-flex",
              width: "63vw",
              marginTop: "3vh",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "52vw",
                height: "9vh",
              }}
            >
              <CardHeader
                avatar={<Avatar sx={{ bgColor: "red" }}>T</Avatar>}
                title="Total hours spent on Capsules"
                subheader="23h 50m"
              />
            </Card>
          </div>
        </Box>
        <span>
          <Button
            variant="contained"
            sx={{
              position: "relative",
              bottom: "0",
              backgroundColor: "#3b97d1",
              marginBottom: "1vh",
              marginRight: "3vw",
            }}
            onClick={() => {
              dispatch({ type: "menuChange", payload: "book" });
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              position: "relative",
              bottom: "0",
              backgroundColor: "red",
              marginBottom: "1vh",
            }}
            onClick={() => {
              dispatch({ type: "logout" });
            }}
          >
            Log Out
          </Button>
        </span>
      </Box>
    </>
  );
};

export default History;
