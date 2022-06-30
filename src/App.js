import "./Stylesheets/App.css";
import Box from "@mui/material/Box";
import TopBar from "./Components/TopBar";
import Contents from "./Components/Contents";
function App() {
  return (
    <>
      <Box
        className="mainBg"
        sx={{
          width: "100vw",
          height: "100vh",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <TopBar />
        <Contents />
      </Box>
    </>
  );
}

export default App;
