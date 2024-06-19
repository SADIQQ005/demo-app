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
        `https://authdev.routepay.com/connect/token`,
        qs.stringify({
          client_id: "CkDywmwrbsGxrMk",
          client_secret: "JScDlRplmEbFbzjFRqCbvPBggxPErY",
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
        `https://apidev.routepay.com/payment/api/v1/payment/SetRequest`,
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
        `https://apidev.routepay.com/payment/api/v1/payment/GetTransaction/${paymentId}`,
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
