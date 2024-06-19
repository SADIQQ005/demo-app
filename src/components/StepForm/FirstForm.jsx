import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { FormContext } from "../../contexts/formContext";

const FirstStep = () => {
  const {
    formatAmount,
    handleNext,
    formValues,
    quantity,
    addQuantity,
    reduceQuantity,
  } = useContext(FormContext);

  return (
    <Box component="section" sx={{ px: 3, py: 6 }}>
      <Box component="div" sx={{ mb: 4 }}>
        <Typography
          fontWeight="600"
          fontSize="1.4rem"
          component="h3"
          gutterBottom
        >
          ShelterStocks
        </Typography>
        <Typography sx={{ opacity: 0.5 }} component="p">
          By ShelterStocks
        </Typography>
      </Box>
      <Typography
        sx={{ opacity: 0.7, mb: 4 }}
        fontWeight="200"
        variant="subtitle1"
      >
        Units of investment on the ShelterStocks Platform. Each unit of
        investment is called a ShelterStock.
      </Typography>
      <Box>
        <Typography sx={{ opacity: 0.5, mb: 1 }} fontWeight="500">
          How many
        </Typography>

        <ButtonGroup
          size="small"
          sx={{
            border: "1px solid #555",
            borderRadius: 5,
            opacity: 0.5,
            px: 2,
          }}
          variant="outlined"
          aria-label="Basic button group"
        >
          <IconButton size="small" onClick={reduceQuantity}>
            <Remove sx={{ fontSize: "1rem" }} />
          </IconButton>
          <IconButton sx={{ mx: 1 }} size="small">
            {quantity}
          </IconButton>
          <IconButton size="small" onClick={addQuantity}>
            <Add sx={{ fontSize: "1rem" }} />
          </IconButton>
        </ButtonGroup>

        {quantity > 1 && (
          <Typography sx={{ opacity: 0.5, my: 2 }} fontWeight="500">
            That's NGN {formatAmount(1000 * quantity)}
          </Typography>
        )}
      </Box>

      <Box component="section" sx={{ mt: 7, mb: 4 }}>
        <Typography
          fontWeight="500"
          sx={{ opacity: 0.5 }}
          component="p"
          gutterBottom
        >
          Price
        </Typography>
        <Typography
          sx={{ opacity: 0.7 }}
          fontWeight="400"
          fontSize="1.1rem"
          component="h2"
        >
          NGN {formatAmount(1000)}
        </Typography>
      </Box>

      <Button
        onClick={() => handleNext()}
        fullWidth
        variant="contained"
        sx={{
          background: "blue",
          textTransform: "capitalize",
          color: "white",
          border: "1px solid blue",
          "&:hover": {
            background: "blue",
            color: "white",
            border: "1px solid blue",
          },
        }}
      >
        Buy now
      </Button>
    </Box>
  );
};

export default FirstStep;
