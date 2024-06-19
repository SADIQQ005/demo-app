import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getPaymentAuth, getPaymentDetails } from "../../services/payment";
import { FormContext } from "../../contexts/formContext";

const image = "/images/square_flex.jpg";
const routePay = "/images/routePay.png";

function index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const [paymentDetail, setPaymentDetail] = useState("");
  const [success, setSuccess] = useState();
  const { resetForm } = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const transactionReference = searchParams.get("transactionReference");

  useEffect(() => {
    async function verify() {
      setLoading(true);
      try {
        const authResponse = await getPaymentAuth();
        const transaction = await getPaymentDetails(
          transactionReference,
          authResponse.access_token
        );
        if (transaction?.paymentStatus === "Successful") {
          setSuccess(true);
          setMessage("Boom!");
          setPaymentDetail(
            "You've just bought the ShelterStocks by ShelterStocks. We've sent a receipt to your email."
          );
        } else {
          setSuccess(false);
          setMessage("Opps!");
          setPaymentDetail(
            "Your payment wasn't successful, but you still have a chance to invest in ShelterStocks properties by trying again. "
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    verify();
  }, []);

  const reset = () => {
    resetForm();
    navigate("/");
  };

  return (
    <Fragment>
      <Grid component="main" container>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { md: "100vh", xs: "80vh" },
            background: "blue",
            p: 6,
          }}
          item
          xs={12}
          lg={8}
        >
          <Box component="section">
            <img
              style={{
                width: "7rem",
                position: "absolute",
                top: 20,
                left: 20,
              }}
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
        </Grid>
        <Grid item md={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { md: "100vh", xs: "80vh" },
              px: { md: 10, xs: 5 },
            }}
            component="section"
          >
            {loading && (
              <Fragment>
                {" "}
                <Stack sx={{ width: "100%" }} direction="column">
                  <Skeleton height={40} animation="wave" />
                  <Skeleton height={100} animation="wave" />
                  <Skeleton height={40} animation="wave" />
                  <Stack
                    spacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    direction="row"
                  >
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="circular" width={40} height={40} />
                  </Stack>

                  <Skeleton height={60} animation="wave" />
                </Stack>
              </Fragment>
            )}
            {!loading && (
              <Stack
                direction="column"
                spacing={4}
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" component="p" fontWeight="700">
                  {message}
                </Typography>

                <Typography fontWeight="300" fontSize=".9rem" component="span">
                  {paymentDetail}
                </Typography>

                <Stack
                  direction="column"
                  component="div"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Typography fontSize=".9rem" fontWeight="400">
                    Share with friends
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <IconButton style={{ backgroundColor: "#02ccfe" }}>
                      <Twitter style={{ color: "white" }} />
                    </IconButton>
                    <IconButton style={{ backgroundColor: "#1877F2" }}>
                      <Facebook style={{ color: "white" }} />
                    </IconButton>
                    <IconButton style={{ backgroundColor: "#25D366" }}>
                      <WhatsApp style={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>

                <Stack
                  direction="column"
                  component="div"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Typography fontWeight="300" fontSize=".9rem">
                    Receipt sent to abusadiqq005@gmail.com
                  </Typography>
                  <Button
                    onClick={reset}
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
                    {success === true
                      ? "Keep shopping"
                      : success === false
                      ? "Try again"
                      : ""}
                  </Button>
                </Stack>
              </Stack>
            )}
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default index;
