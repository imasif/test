import React, { useState, useRef, useEffect, Fragment } from "react";
import Step from "./step";

const StepperHead = ({
  stepperContent,
  navigateToStepHandler,
  isVertical,
  isInline,
  isRightToLeftLanguage,
  currentTabIndex,
}) => (
  <div
    className={`stepper-head ${isVertical ? "vertical-stepper-head" : ""} ${
      isInline ? "inline-stepper-head" : ""
    }`}
  >
    <div className="logo">
      <img
        alt="logo"
        src={require("../../assets/logo_2.png")}
        width={131}
        height={19}
      />
    </div>
    {stepperContent.map((el, i) => (
      <Step
        key={i}
        index={i}
        navigateToStepHandler={navigateToStepHandler}
        isActive={i === currentTabIndex}
        isComplete={el.isComplete}
        isWarning={el.isWarning}
        isError={el.isError}
        isRightToLeftLanguage={isRightToLeftLanguage}
        indicator={i + 1}
        label={el.label}
      />
    ))}
  </div>
);

export default StepperHead;
