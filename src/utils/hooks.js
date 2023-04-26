import { useEffect, useState } from "react";

export const useTimer = (startTime) => {
  const [time, setTime] = useState(startTime);
  const [intervalId, setIntervalId] = useState(null);
  const hasTimerEnded = time <= 0;
  const isTimerRunning = intervalId != null;

  const update = () => {
    setTime((time) => time - 1);
  };
  const startTimer = () => {
    if (!hasTimerEnded && !isTimerRunning) {
      setIntervalId(setInterval(update, 1000));
    }
  };
  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  // clear interval when the timer ends
  useEffect(() => {
    if (hasTimerEnded) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [hasTimerEnded, intervalId]);
  // clear interval when component unmounts
  useEffect(
    () => () => {
      clearInterval(intervalId);
    },
    [intervalId]
  );

  return {
    time,
    startTimer,
    stopTimer,
  };
};
