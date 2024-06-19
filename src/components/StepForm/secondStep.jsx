import React, { Fragment, useContext, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FormContext } from "../../contexts/formContext";
import { Add, Remove } from "@mui/icons-material";

const SecondStep = () => {
  const [isGift, setIsGift] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const {
    handleChange,
    formValues,
    handleBack,
    handleNext,
    formatAmount,
    quantity,
    addQuantity,
    reduceQuantity,
  } = useContext(FormContext);

  const { firstName, lastName, phoneNumber, email } = formValues;

  const handleGift = (e) => {
    setIsGift(e.target.checked);
  };

  const handleSendEmail = (e) => {
    setSendEmail(e.target.checked);
  };

  const handleSubmit = (event) => {
    handleNext();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { md: "100vh", xs: "80vh" },
      }}
    >
      <Box
        sx={{
          p: 3,
          flexGrow: { md: 1, xs: 0 },
          overflow: { md: "auto", xs: "none" },
        }}
      >
        <Typography
          fontWeight="600"
          component="h3"
          sx={{ opacity: 0.5, mb: 3 }}
        >
          Buy ShelterStocks
        </Typography>
        <FormControlLabel
          control={
            <Checkbox onChange={handleGift} checked={isGift} size="small" />
          }
          label="Is this a gift?"
          sx={{ my: 3, opacity: 0.6, borderRadius: 3 }}
        />

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isGift && (
              <Fragment>
                <Grid item xs={12}>
                  <Typography
                    fontSize=".8rem"
                    sx={{ opacity: 0.5 }}
                    component="label"
                    fontWeight="600"
                  >
                    Recipient name
                  </Typography>
                </Grid>

                <Grid sx={{ mb: 4 }} item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <TextField
                      size="small"
                      name="firstName"
                      // value={firstName?.value}
                      // onChange={handleChange}
                      // error={!!firstName.error}
                      // helperText={firstName.error}
                      placeholder="First Name"
                      required
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <TextField
                      size="small"
                      name="lastName"
                      // value={lastName?.value}
                      // onChange={handleChange}
                      // error={!!lastName.error}
                      // helperText={lastName.error}
                      placeholder="Last Name"
                      required
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    fontSize=".8rem"
                    sx={{ opacity: 0.5 }}
                    component="label"
                    fontWeight="600"
                  >
                    Recipient phone number
                  </Typography>
                </Grid>

                <Grid sx={{ mb: 3 }} item xs={6}>
                  <FormControl size="small" fullWidth variant="outlined">
                    <InputLabel>Country</InputLabel>
                    <Select label="Country" defaultValue="Nigeria (+234)">
                      <MenuItem value="Nigeria (+234)">Nigeria (+234)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl style={{ width: "100%" }}>
                    <TextField
                      size="small"
                      name="phoneNumber"
                      type="number"
                      // value={phoneNumber?.value}
                      // onChange={handleChange}
                      // error={!!phoneNumber.error}
                      // helperText={phoneNumber.error}
                      required
                    />
                  </FormControl>
                </Grid>
              </Fragment>
            )}

            {isGift && (
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleSendEmail}
                      checked={sendEmail}
                      size="small"
                    />
                  }
                  label="Inform recipient via email"
                  sx={{ mb: 3, opacity: 0.6, borderRadius: 3 }}
                />
              </Grid>
            )}

            {sendEmail && isGift && (
              <Fragment>
                <Grid item xs={12}>
                  <Typography
                    fontSize=".8rem"
                    sx={{ opacity: 0.5 }}
                    component="label"
                    fontWeight="600"
                  >
                    Recipient email address
                  </Typography>
                </Grid>

                <Grid sx={{ mb: 4 }} item xs={12}>
                  <FormControl style={{ width: "100%" }}>
                    <TextField
                      size="small"
                      name="email"
                      type="email"
                      // value={email?.value}
                      // onChange={handleChange}
                      // error={!!email.error}
                      // helperText={email.error}
                      placeholder="example@you.com"
                      required
                    />
                  </FormControl>
                </Grid>
              </Fragment>
            )}

            <Grid item xs={12}>
              <Typography
                fontSize=".8rem"
                sx={{ opacity: 0.5 }}
                component="label"
                fontWeight="600"
              >
                Your name
              </Typography>
            </Grid>

            <Grid sx={{ mb: 4 }} item xs={6}>
              <FormControl style={{ width: "100%" }}>
                <TextField
                  size="small"
                  name="firstName"
                  type="text"
                  value={firstName?.value}
                  onChange={handleChange}
                  error={!!firstName.error}
                  helperText={firstName.error}
                  placeholder="First Name"
                  required
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl style={{ width: "100%" }}>
                <TextField
                  size="small"
                  name="lastName"
                  type="text"
                  value={lastName?.value}
                  onChange={handleChange}
                  error={!!lastName.error}
                  helperText={lastName.error}
                  placeholder="Last Name"
                  required
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                fontSize=".8rem"
                sx={{ opacity: 0.5 }}
                component="label"
                fontWeight="600"
              >
                Your email address
              </Typography>
            </Grid>

            <Grid sx={{ mb: 4 }} item xs={12}>
              <FormControl style={{ width: "100%" }}>
                <TextField
                  size="small"
                  name="email"
                  type="email"
                  value={email?.value}
                  onChange={handleChange}
                  error={!!email.error}
                  helperText={email.error}
                  placeholder="example@you.com"
                  required
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography
                fontSize=".8rem"
                sx={{ opacity: 0.5 }}
                component="label"
                fontWeight="600"
              >
                Your phone number
              </Typography>
            </Grid>

            <Grid sx={{ mb: 3 }} item xs={6}>
              <FormControl size="small" fullWidth variant="outlined">
                <InputLabel>Country</InputLabel>
                <Select label="Country" defaultValue="Nigeria (+234)">
                  <MenuItem value="Nigeria (+234)">Nigeria (+234)</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl style={{ width: "100%" }}>
                <TextField
                  size="small"
                  name="phoneNumber"
                  type="number"
                  value={phoneNumber?.value}
                  onChange={handleChange}
                  error={!!phoneNumber.error}
                  helperText={phoneNumber.error}
                  required
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
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
                Review and pay
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid sx={{ my: 1 }} item xs={12}>
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
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 4,
          background: "#fff",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          mt: "auto",
          position: "sticky",
          bottom: 0,
        }}
      >
        <Box>
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
        </Box>
        <Box>
          <Typography variant="h6">
            NGN {formatAmount(1000 * quantity)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondStep;
