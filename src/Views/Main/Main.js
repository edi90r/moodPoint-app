import { Logo } from "../../components/atoms/Logo/Logo";
import { ContactRequestIcon } from "../../components/atoms/ContactRequestIcon/ContactRequestIcon";
import { MoodIcon } from "../../components/atoms/MoodIcon/MoodIcon";
import { useGlobalContext } from "../../store/GlobalContext/useGlobalContext";
import { PopUp } from "../../components/organisms/PopUp/PopUp";

export const Main = () => {
  const { handleIndicateMood, handleContactRequest } = useGlobalContext();

  return (
    <>
      <div className="col vh-100">
        <div className="row d-flex justify-content-between custom_Nav_container">
          <Logo className="align-self-start wf-10 pt-5 ps-5 custom_Logo" />
          <ContactRequestIcon
            onClick={() => {
              handleContactRequest();
            }}
          />
        </div>
        <div className="row d-flex justify-content-between w-100 px-5 align-items-center custom_Content_container">
          <MoodIcon
            className="w-25 mb-9 custom_mood_button "
            mood={"bad"}
            onClick={(e) => {
              handleIndicateMood(e.currentTarget.getAttribute("mood"));
            }}
          />
          <MoodIcon
            className="w-25 mb-9 custom_mood_button"
            mood={"middle"}
            onClick={(e) => {
              handleIndicateMood(e.currentTarget.getAttribute("mood"));
            }}
          />
          <MoodIcon
            className="w-25 mb-9 custom_mood_button "
            mood={"good"}
            onClick={(e) => {
              handleIndicateMood(e.currentTarget.getAttribute("mood"));
            }}
          />
        </div>
      </div>
      <PopUp />
    </>
  );
};
