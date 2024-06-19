import { Box } from "@mui/material";
import React, { Fragment } from "react";

const image = "/images/square_flex.jpg";
const routePay = "/images/routePay.png";

export default function Left() {
  return (
    <Fragment>
      <Box sx={{ p: 6 }} component="section">
        <img
          style={{ width: "7rem", position: "absolute", top: 20, left: 20 }}
          src={routePay}
          alt="route pay"
        />
        <img
          style={{
            width: "100%",
            maxWidth: "33rem",
            borderRadius: "5px",
            height: "auto",
          }}
          src={image}
          alt="square_flex"
        />
      </Box>
    </Fragment>
  );
}
