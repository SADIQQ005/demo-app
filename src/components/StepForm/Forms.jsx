// src/MultiStepForm.js
import React, { useContext } from "react";
import FirstStep from "./FirstForm";
import { FormContext } from "../../contexts/formContext";
import SecondStep from "./secondStep";
import ComfirmStep from "./comfirmForm";

const index = () => {
  const { activeStep } = useContext(FormContext);

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

export default index;
