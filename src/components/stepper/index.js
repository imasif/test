import React, { useState, useRef, useEffect, Fragment } from "react";
import "./stepper.css";
import StepperFooter from "./stepperfooter";
import StepperHead from "./stepperhead";

const Stepper = ({
  isRightToLeftLanguage,
  isVertical,
  isInline,
  stepperContent,
  submitStepper,
}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(1),
    isLastStep = currentTabIndex === stepperContent.length - 1,
    isPrevBtn = currentTabIndex !== 0;

  const navigateToStepHandler = (index) => {
    if (index !== currentTabIndex) {
      setCurrentTabIndex(index);
    }
  };

  const nextStepHandler = () => {
    setCurrentTabIndex((prev) => {
      if (prev !== stepperContent.length - 1) {
        return prev + 1;
      }
    });
  };

  const previousStepHandler = () => {
    setCurrentTabIndex((prev) => prev - 1);
  };

  const submitHandler = () => {
    submitStepper();
  };

  return (
    <div className="stepper-wrapper">
      <div style={{ display: isVertical ? "flex" : "block" }}>
        <StepperHead
          stepperContent={stepperContent}
          navigateToStepHandler={navigateToStepHandler}
          isVertical={isVertical}
          isInline={isInline}
          currentTabIndex={currentTabIndex}
          isRightToLeftLanguage={isRightToLeftLanguage}
        />
        <div className="stepper-body">
          {stepperContent.map((el, i) => (
            <Fragment key={i}>{i === currentTabIndex && el.content}</Fragment>
          ))}

          <StepperFooter
            isPrevBtn={isPrevBtn}
            previousStepHandler={previousStepHandler}
            isLastStep={isLastStep}
            nextStepHandler={nextStepHandler}
            submitHandler={submitHandler}
            stepperContent={stepperContent}
            currentTabIndex={currentTabIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
