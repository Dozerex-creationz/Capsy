import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import VoiceBox from "./VoiceComponents/VoiceBox";
import listeningLogo from "./../Images/listeningCapsy.png";
import { useSelector, useDispatch } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const VoiceRec = () => {
  useEffect(() => {
    SpeechRecognition.startListening();
  });

  const loggedIn = useSelector((state) => state.status.loggedIn);
  const voice = useSelector((state) => state.status.voiceOpen);
  const menuItem = useSelector((state) => state.book.menuItem);
  const city = useSelector((state) => state.book.city);
  const hotel = useSelector((state) => state.book.hotel);
  const dispatch = useDispatch();
  var [last, setLast] = useState("");
  const searchInList = (list, id) => {
    var result;
    list.map((item) => {
      if (Number(item.id) === Number(id)) {
        result = item;
      }
      return 0;
    });
    return result;
  };
  const commands = [
    {
      command: ["begin", "start", "open voice", "voice command (activate)"],
      callback: () => {
        if (!loggedIn) {
          dispatch({ type: "signOpen", payload: true });
        } else {
          dispatch({ type: "voice", payload: true });
        }
      },
    },
    {
      command: ["log in", "login", "self destruct", "inter merda"],
      callback: () => {
        dispatch({ type: "logIn", payload: true });
        dispatch({ type: "voice", payload: true });
      },
    },
    {
      command: ["profile"],
      callback: ({ resetTranscript }) => {
        dispatch({ type: "menuChange", payload: "history" });
        dispatch({ type: "voice", payload: false });
        resetTranscript();
      },
    },
    {
      command: ["bookings"],
      callback: ({ resetTranscript }) => {
        dispatch({ type: "menuChange", payload: "details" });
        dispatch({ type: "voice", payload: false });
        resetTranscript();
      },
    },
    {
      command: ["FAQ & help", "FAQ", "help"],
      callback: ({ resetTranscript }) => {
        dispatch({ type: "menuChange", payload: "help" });
        dispatch({ type: "voice", payload: false });
        resetTranscript();
      },
    },
    {
      command: [
        "book",
        "book capsules",
        "book hotels",
        "capsule(s)",
        "hotel(s)",
      ],
      callback: ({ resetTranscript }) => {
        dispatch({ type: "menuChange", payload: "book" });
        dispatch({ type: "voiceMenu", payload: city });
        setLast("menu");
        resetTranscript();
      },
    },
    {
      command: ["city number *"],
      callback: (cityChoice, { resetTranscript }) => {
        var cityResp = searchInList(city, cityChoice - 1);
        if (!cityResp) {
          return;
        }
        dispatch({ type: "city", payload: cityResp });
        dispatch({ type: "voiceMenu", payload: hotel });
        setLast("city");
        resetTranscript();
      },
    },
    {
      command: ["hotel number *"],
      callback: (hotelChoice, { resetTranscript }) => {
        var hotelResp = searchInList(hotel, hotelChoice - 1);
        if (!hotelResp) {
          return;
        }
        dispatch({ type: "hotel", payload: hotelResp });
        dispatch({ type: "activeStep", payload: 2 });
        dispatch({ type: "voice", payload: false });
        setLast("hotel");
        resetTranscript();
      },
    },
    {
      command: ["hold on", "reset", "start"],
      callback: ({ resetTranscript }) => {
        resetTranscript();
      },
    },

    {
      command: ["close (capsi)", "cancel (capsi)"],
      callback: ({ resetTranscript }) => {
        dispatch({ type: "voice", payload: false });
        resetTranscript();
      },
    },
    {
      command: "log out",
      callback: ({ resetTranscript }) => {
        dispatch({ type: "logout" });
        resetTranscript();
      },
    },
    {
      command: ["back", "go back"],
      callback: () => {
        if (last === "menu") {
          dispatch({ type: "voiceMenu", payload: menuItem });
        } else if (last === "city") {
          dispatch({ type: "voiceMenu", payload: city });
        } else if (last === "hotel") {
          dispatch({ type: "voice", payload: true });
        }
      },
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({
    commands,
  });
  const keyHandler = (event) => {
    if (event.key === "Escape") {
      dispatch({ type: "voice", payload: false });
      dispatch({ type: "voice2Start" });
      resetTranscript();
      return;
    }
    if (event.key === " ") {
      event.preventDefault();
      return;
    }
    if (event.key === " " && event.ctrlKey) {
      if (!loggedIn) {
        dispatch({ type: "signOpen", payload: true });
      }
      dispatch({ type: "voice", payload: true });
      return;
    }
  };
  document.addEventListener("keydown", keyHandler);
  return (
    <>
      <Box sx={{ position: "fixed", bottom: "2vh", right: "1vw" }}>
        <IconButton
          aria-label="person-outline"
          sx={{
            backgroundColor: "#2ba9fc",
            color: "white",
            opacity: "0.85",
          }}
          onClick={() => {
            if (!loggedIn) {
              dispatch({ type: "signOpen", payload: true });
            }
            SpeechRecognition.startListening({ continuous: true });
            dispatch({ type: "voice", payload: true });
          }}
        >
          <MicRoundedIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={voice}
      >
        <VoiceBox transcript={transcript} />
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            opacity: "0.75",
            float: "left",
            overflow: "hidden",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <img
            style={{ width: "12vw" }}
            src={listeningLogo}
            alt="Im listening to you"
          />
        </div>
      </Backdrop>
    </>
  );
};

export default VoiceRec;
