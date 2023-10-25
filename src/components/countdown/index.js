import "../../App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import Timer from "../timer";

function CountDown() {
  const [days, setDays] = useState(27);
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);
  const [isRunning, setIsRunning] = useState(null);
  // End of Time

  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "Happy coding in 2023",
  });
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (days > 0) {
          setHours((days) => days - 1);
          setHours(59);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 1) {
      setShowEndScreen({ ...showEndScreen, show: true });
      resetTimer();
    }

    startTimer();
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, days, isRunning, showEndScreen.show]);

  // Start
  function startTimer() {
    if (days !== 0 || hours !== 0 || minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
      setShowEndScreen({ ...showEndScreen, show: false });
    } else {
      window.alert("Add Time.");
    }
  }

  function resetTimer() {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setDays(0);
  }
  // Handlers

  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const changeHours = (e) => {
    setHours(e.target.value);
  };
  const changeDays = (e) => {
    setDays(e.target.value);
  };
  return (
    <div>
      {showEndScreen.show && (
        <h1 className="title  text-light">{showEndScreen.message}</h1>
      )}
      <Timer
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
        changeSeconds={changeSeconds}
        changeMinutes={changeMinutes}
        changeHours={changeHours}
        changeDays={changeDays}
      />
    </div>
  );
}

export default CountDown;
