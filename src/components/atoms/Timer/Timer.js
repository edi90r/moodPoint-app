import { useTimer } from "../../../utils/hooks";
import { useGlobalContext } from "../../../store/GlobalContext/useGlobalContext";

export const Timer = ({ timeToLeft }) => {
  const seconds = 3600 - timeToLeft / 1000;
  const { displayModal } = useGlobalContext();
  const { time, startTimer, stopTimer } = useTimer(seconds);

  const min = Math.floor((time % 3600) / 60);
  const sec = Math.floor((time % 3600) % 60);

  displayModal ? startTimer() : stopTimer();

  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec} ⏰`;
};
