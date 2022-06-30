import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
const FAQ = [
  {
    questNo: "1",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
  {
    questNo: "2",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
  {
    questNo: "3",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
  {
    questNo: "4",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
  {
    questNo: "5",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
  {
    questNo: "6",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
  {
    questNo: "7",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
  {
    questNo: "8",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
  {
    questNo: "9",
    quest: "What is the procedure to change the room?",
    resp: "Sorry, We are not responsible for this",
  },
];
const Help = () => {
  return (
    <>
      <Box
        sx={{
          width: "70vw",
          height: "70vh",
          backgroundColor: "#d8d9c1",
          borderRadius: "0.5%",
          overflow: "auto",
        }}
      >
        <h1
          style={{
            width: "70vw",
            textAlign: "center",
            marginTop: "5vh",
            color: "#1f5a80",
          }}
        >
          Frequently Asked Questions
        </h1>
        {FAQ.map((q) => {
          return (
            <div
              style={{
                display: "inline-flex",
                width: "70vw",
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
                  avatar={<Avatar sx={{ bgColor: "red" }}>{q.questNo}</Avatar>}
                  title={q.quest}
                  subheader={q.resp}
                />
              </Card>
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default Help;
