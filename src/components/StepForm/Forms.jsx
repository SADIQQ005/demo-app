// src/MultiStepForm.js
import React, { useContext } from "react";
import FirstStep from "./FirstForm";
import { FormContext } from "../../contexts/formContext";
import SecondStep from "./secondStep";
import ComfirmStep from "./comfirmForm";

const Index = () => {
  const { activeStep } = useContext(FormContext);

  console.log("Payment URL:", import.meta.env.VITE_PAYMENT_URL);

  switch (activeStep) {
    case 0:
      return <FirstStep />;
    case 1:
      return <SecondStep />;
    case 2:
      return <ComfirmStep />;
    default:
      return <FirstStep />;
  }
};

export default Index;
