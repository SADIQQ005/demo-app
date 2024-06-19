import React, { createContext, useReducer, useState } from "react";
import { initailValues } from "../utils/initaillValues";

import { v4 as uuidv4 } from "uuid";
import { SetRequestPayment, getPaymentAuth } from "../services/payment";

const FormContext = createContext({
  activeStep: 0,
  quantity: 1,
  formValues: initailValues,
});

function reducer(state, action) {
  switch (action.type) {
    case "increaseQuantity":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "decreaseQuantity":
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
      };
    case "increase":
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case "decrease":
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case "reset":
      return {
        ...state,
        activeStep: 0,
        formValues: initailValues,
      };
    case "form-value":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            value: action.fieldValue,
          },
        },
      };
    case "setUrl":
      return {
        ...state,
        url: action.url,
      };
    default:
      return state;
  }
}

const FormProvider = ({ children }) => {
  const [{ activeStep, formValues, quantity }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    quantity: 1,
    formValues: initailValues,
  });

  const { firstName, lastName, phoneNumber, email } = formValues;
  const [loading, setLoading] = useState(false);

  const payment = async () => {
    setLoading(true);
    const amount = 1000;
    const data = {
      merchantId: "CkDywmwrbsGxrMk",
      returnUrl: `${window.location.origin}/verify`,
      merchantReference: uuidv4(),
      totalAmount: (amount * quantity).toString(),
      currency: "NGN",
      customer: {
        email: email?.value,
        mobile: phoneNumber?.value,
        firstname: firstName?.value,
        lastname: lastName?.value,
        username: lastName?.value,
      },
      products: [
        {
          name: "ShelterStocks",
          unitPrice: "1000",
          quantity,
        },
      ],
    };

    try {
      const response = await getPaymentAuth();
      const { redirectUrl } = await SetRequestPayment(
        data,
        response.access_token
      );
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const fieldName = formValues[name];
    if (!fieldName) return;

    const fieldValue = value;

    dispatch({ type: "form-value", name, fieldValue });
  };

  const handleNext = () => dispatch({ type: "increase" });
  const handleBack = () => dispatch({ type: "decrease" });
  const addQuantity = () => dispatch({ type: "increaseQuantity" });
  const reduceQuantity = () => dispatch({ type: "decreaseQuantity" });
  const resetForm = () => dispatch({ type: "reset" });

  function formatAmount(amount, locale = "en-NG") {
    const formattedAmount = new Intl.NumberFormat(locale, {
      style: "decimal",
    }).format(amount);

    return formattedAmount;
  }

  const value = {
    quantity,
    activeStep,
    formValues,
    addQuantity,
    reduceQuantity,
    handleNext,
    handleChange,
    formatAmount,
    handleBack,
    resetForm,
    payment,
    loading,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export { FormContext, FormProvider };
