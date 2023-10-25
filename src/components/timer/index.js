import React from "react";
function Timer({
  seconds,
  minutes,
  hours,
  days,
  changeSeconds,
  changeMinutes,
  changeHours,
  changeDays,
}) {
  return (
    <div className="timerWrap">
      <div className="d-flex flex-column">
        <input disabled value={days} onChange={changeDays} />
        <label>days</label>
      </div>{" "}
      <div className="d-flex flex-column">
        <input disabled value={hours} onChange={changeHours} />
        <label>hours</label>
      </div>{" "}
      <div className="d-flex flex-column">
        <input disabled value={minutes} onChange={changeMinutes} />
        <label>minutes</label>
      </div>{" "}
      <div className="d-flex flex-column">
        <input disabled value={seconds} onChange={changeSeconds} />
        <label>seconds</label>
      </div>{" "}
    </div>
  );
}

export default Timer;
