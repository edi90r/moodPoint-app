import { useCallback, useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import { Modal } from "bootstrap";
import { Timer } from "../../atoms/Timer/Timer";
import { useGlobalContext } from "../../../store/GlobalContext/useGlobalContext";
import { useAuth } from "../../../store/AuthContext/useAuth";

export const PopUp = () => {
  const modalRef = useRef();
  const { displayModal, setDisplayModal, modalType, setModalType, timeToLeft } =
    useGlobalContext();

  const { user } = useAuth();

  const showPopUp = () => {
    const modalEle = modalRef.current;
    const bsModal = new Modal(modalEle, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();
  };

  const hidePopUp = useCallback(() => {
    const modalEle = modalRef.current;
    const bsModal = bootstrap.Modal.getInstance(modalEle);
    bsModal.hide();

    setDisplayModal(false);
    setModalType("");
  }, [setDisplayModal, setModalType]);

  useEffect(() => {
    if (displayModal) {
      const closePopUpAutomaticly = setTimeout(() => {
        hidePopUp();
      }, 8000);
      return () => clearTimeout(closePopUpAutomaticly);
    }
  }, [displayModal, hidePopUp]);

  const switchModalCopy = (modalType) => {
    switch (modalType) {
      case "indicateMood":
        return (
          <p className="fs-3 text-center mb-0">
            ❤️ ❤️ ❤️ Dziękujemy za wskazanie nastroju ❤️ ❤️ ❤️
          </p>
        );

      case "indicateMoodReject":
        return (
          <>
            <p className="fs-3 text-center mb-0">
              Dziś nastrój został już wskazany, nie zapomnnij wskazać jutro.
            </p>
            <p className="fs-3 text-center mb-0">Miłego dnia 😉😉😉</p>
          </>
        );

      case "indicateMoodFirst":
        return (
          <p className="fs-3 text-center mb-0">
            ☝️ ☝️ ☝️ Proszę najpierw wskazać swój nastrój ☝️ ☝️ ☝️
          </p>
        );

      case "requestContact":
        return (
          <p className="fs-3 text-center mb-0">
            ☎️ ☎️ ☎️ Prośba kontaktu została dodana ☎️ ☎️ ☎️
          </p>
        );

      case "requestContactReject":
        return (
          <>
            <p className="fs-3 text-center mb-0">
              Prośba kontaktu została już dodana, następną możesz dodać za:
            </p>
            <p className="fs-3 text-center mb-0">
              <Timer timeToLeft={timeToLeft} />
            </p>
          </>
        );

      default:
        break;
    }
  };

  displayModal && showPopUp();

  return (
    <div
      className="modal fade"
      id="info-modal"
      tabIndex="-1"
      aria-labelledby="info-modalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered mw-70 custom_Modal_dialog">
        <div className="modal-content vh-60">
          <div className="modal-body d-flex flex-column justify-content-center align-items-center px-7 fw-bold">
            <p className="fs-3 mb-0">{user.name}</p>
            {switchModalCopy(modalType)}
          </div>
        </div>
      </div>
    </div>
  );
};
