import React, { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVALL");
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 20);
    }, 20);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    ></progress>
  );
};

export default QuestionTimer;
