import React, { useState, useRef, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const StepperFooter = ({
  isPrevBtn,
  previousStepHandler,
  isLastStep,
  nextStepHandler,
  submitHandler,
  stepperContent,
  currentTabIndex,
}) => {
  const submitCurrentStep = async () => {
    await stepperContent[currentTabIndex].clicked();
    nextStepHandler();
  };

  return (
    <div
      className="stepper-footer"
      style={{ justifyContent: isPrevBtn ? "space-between" : "flex-end" }}
    >
      {isPrevBtn && (
        <button className="stepper-footer-btn" onClick={() => {}}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
      <button
        className={`stepper-footer-btn ${isLastStep ? "success" : "primary"}`}
        onClick={
          isLastStep
            ? submitHandler
            : stepperContent[currentTabIndex].clicked
            ? submitCurrentStep
            : nextStepHandler
        }
        disabled={
          (isLastStep
            ? stepperContent.some((el) => !el.isComplete)
            : !stepperContent[currentTabIndex].isComplete) ||
          stepperContent[currentTabIndex].isLoading
        }
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export default StepperFooter;
