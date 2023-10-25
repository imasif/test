import React, { useState, useRef, useEffect, Fragment } from "react";

const Step = ({
  indicator,
  label,
  navigateToStepHandler,
  index,
  isActive,
  isComplete,
  isWarning,
  isError,
  isRightToLeftLanguage,
}) => {
  const classes = [""];

  if (isActive) {
    classes.push("is-active");
  }
  if (isComplete) {
    classes.push("is-complete");
  }
  if (isWarning) {
    classes.push("is-warning");
  }
  if (isError) {
    classes.push("is-error");
  }
  if (isRightToLeftLanguage) {
    classes.push("rightToLeft");
  }

  return (
    <div className={`stepper-step ${classes.join(" ")}`}>
      <div className="stepper-indicator">
        <span
          className="stepper-indicator-info"
          onClick={
            isComplete || isError ? () => navigateToStepHandler(index) : null
          }
        ></span>
      </div>
      <div className="stepper-label">{label}</div>
    </div>
  );
};

export default Step;
