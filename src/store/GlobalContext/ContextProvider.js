import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useAuth } from "../AuthContext/useAuth";
import {
  isMoodExists,
  indicateTheMood,
  sendContactRequest,
  isWithin,
} from "../../controllers/user";

export const ContextProvider = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [timeToLeft, setTimeToLeft] = useState(null);

  const {
    user: { userId },
  } = useAuth();

  const handleIndicateMood = async (mood) => {
    const currentDay = new Date().toISOString().split("T")[0];
    const isExists = await isMoodExists(userId, currentDay);
    const { exists } = isExists.data;

    if (exists) {
      setModalType("indicateMoodReject");
      setDisplayModal(true);
      return;
    }

    const moodPackage = {
      source: {
        userId,
      },
      timestamp: new Date().toISOString(),
      mood: mood,
    };
    await indicateTheMood(moodPackage);
    setModalType("indicateMood");
    setDisplayModal(true);
  };

  const handleContactRequest = async () => {
    const currentDay = new Date().toISOString().split("T")[0];
    const isExists = await isMoodExists(userId, currentDay);
    const { exists } = isExists.data;

    if (exists) {
      const latest = await isWithin(userId);
      if (latest.within) {
        setModalType("requestContactReject");
        setTimeToLeft(latest.data.timeToLeft);
        setDisplayModal(true);
        return;
      }

      const contactRequestPackage = {
        source: {
          userId,
        },
        timestamp: new Date().toISOString(),
        resolve: false,
      };

      await sendContactRequest(contactRequestPackage);
      setModalType("requestContact");
      setDisplayModal(true);
      return;
    }

    setModalType("indicateMoodFirst");
    setDisplayModal(true);
  };

  const globalStore = {
    handleIndicateMood,
    handleContactRequest,
    displayModal,
    setDisplayModal,
    modalType,
    setModalType,
    timeToLeft,
  };

  return (
    <GlobalContext.Provider value={globalStore}>
      {children}
    </GlobalContext.Provider>
  );
};
