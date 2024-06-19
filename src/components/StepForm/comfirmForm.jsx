import React, { Fragment, useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormContext } from "../../contexts/formContext";
import {
  CallOutlined,
  EmailOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";

const ComfirmStep = () => {
  const { formValues, handleBack, quantity, formatAmount, payment, loading } =
    useContext(FormContext);
  const [discount, setDiscount] = useState(false);
  const { firstName, lastName, phoneNumber, email } = formValues;

  return (
    <Fragment>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 5,
        }}
      >
        <Box>
          <Typography fontWeight="600" component="h3" sx={{ opacity: 0.5 }}>
            Buy ShelterStocks
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Stack spacing={2} direction="column">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ width: 20, height: 20, bgcolor: "blue" }}>
                <Typography fontSize=".7rem" fontWeight="100">
                  {lastName?.value[0]}
                </Typography>
              </Avatar>
              <Typography
                textTransform="capitalize"
                fontWeight="400"
                sx={{ opacity: 0.7, ml: 1, fontSize: ".9rem" }}
              >
                {lastName?.value} {firstName?.value}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailOutlined fontSize=".9rem" />
              <Typography
                fontWeight="100"
                sx={{ opacity: 0.7, ml: 1, fontSize: ".9rem" }}
              >
                {email?.value}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CallOutlined fontSize=".9rem" />
              <Typography
                fontWeight="100"
                sx={{ opacity: 0.7, ml: 1, fontSize: ".9rem" }}
              >
                +234 {phoneNumber?.value.slice(1)}
              </Typography>
            </Box>
          </Stack>
          <Divider sx={{ my: 3 }} />

          <Stack spacing={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                textTransform="capitalize"
                fontWeight="500"
                sx={{ opacity: 0.7, ml: 1, fontSize: ".9rem" }}
              >
                ShelterStocks
              </Typography>
              <Typography
                textTransform="capitalize"
                fontWeight="500"
                sx={{ opacity: 0.7, ml: 1, fontSize: ".9rem" }}
              >
                NGN {formatAmount(1000)}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                textTransform="capitalize"
                fontWeight="500"
                sx={{ opacity: 0.7, ml: 1, fontSize: ".9rem" }}
              >
                Total
              </Typography>
              <Typography
                textTransform="capitalize"
                fontWeight="500"
                sx={{ opacity: 0.7, ml: 1, fontSize: ".9rem" }}
              >
                NGN {formatAmount(1000 * quantity)}
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Have a discount code?</Typography>
              <IconButton onClick={() => setDiscount((prev) => !prev)}>
                <KeyboardArrowDown />
              </IconButton>
            </Box>

            {discount && (
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "#F2F2F2",
                      textTransform: "capitalize",
                      color: "#555",
                      border: "1px solid #F2F2F2",
                      boxShadow: 0,
                      "&:hover": {
                        background: "#F2F2F2",
                        color: "#333",
                        border: "1px solid #F2F2F2",
                        boxShadow: 0,
                      },
                    }}
                  >
                    apply
                  </Button>
                </Grid>
              </Grid>
            )}
          </Stack>

          <Stack spacing={2}>
            <Button
              onClick={() => payment()}
              disabled={loading}
              fullWidth
              variant="contained"
              sx={{
                background: "blue",
                textTransform: "capitalize",
                color: "white",
                "&:hover": {
                  background: "blue",
                  color: "white",
                },
              }}
            >
              {loading ? "Please wait" : `Pay NGN ${formatAmount(1000 * quantity)}`}
            </Button>

            <Button
              onClick={() => handleBack()}
              fullWidth
              variant="contained"
              sx={{
                background: "#F2F2F2",
                textTransform: "capitalize",
                color: "#555",
                border: "1px solid #F2F2F2",
                boxShadow: 0,
                "&:hover": {
                  background: "#F2F2F2",
                  color: "#333",
                  border: "1px solid #F2F2F2",
                  boxShadow: 0,
                },
              }}
            >
              Back
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography fontSize=".7rem" fontWeight="200" sx={{ opacity: 0.5 }}>
              or
            </Typography>
          </Divider>

          <Button
            fullWidth
            disabled
            variant="outlined"
            sx={{
              fontWeight: "300",
              background: "#F2F2F2",
              fontSize: ".7rem",
              color: "blue",
              border: "1px solid #F2F2F2",
              boxShadow: 0,
              "&:hover": {
                background: "#F2F2F2",
                color: "blue",
                border: "1px solid #F2F2F2",
                boxShadow: 0,
              },
            }}
          >
            Let someone pay for you
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ComfirmStep;
