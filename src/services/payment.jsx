import axios from "axios";
import qs from "qs";

export const getPaymentAuth = () => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(
        `${import.meta.env.VITE_AUTH_URL}/connect/token`,
        qs.stringify({
          client_id: import.meta.env.VITE_CLIENT_ID,
          client_secret: import.meta.env.VITE_CLIENT_SECRET,
          grant_type: "client_credentials",
        }),
        config
      )
      .then((response) => {
        if (response) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const SetRequestPayment = (paymentData, token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_PAYMENT_URL}/payment/SetRequest`,
        paymentData,
        config
      )
      .then((response) => {
        if (response) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPaymentDetails = (paymentId, token) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(
        `${
          import.meta.env.VITE_PAYMENT_URL
        }/payment/GetTransaction/${paymentId}`,
        config
      )
      .then((response) => {
        if (response) {
          resolve(response.data);
        } else {
          reject(response.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
