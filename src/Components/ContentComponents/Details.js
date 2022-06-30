import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "capsule", headerName: "Hotel Name", width: 150 },
  { field: "location", headerName: "City", width: 100 },
  { field: "from", headerName: "From", width: 300 },
  { field: "to", headerName: "To", width: 300 },
];
const Details = () => {
  const rows = useSelector((state) => state.user.bookings);
  return (
    <>
      <Box
        sx={{
          width: "70vw",
          height: "70vh",
          backgroundColor: "#d6c1c1",
          borderRadius: "0.5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
          Your Booking History
        </h1>
        <DataGrid
          sx={{ margin: "5vw", width: "60vw" }}
          rows={rows}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[4]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </>
  );
};

export default Details;
