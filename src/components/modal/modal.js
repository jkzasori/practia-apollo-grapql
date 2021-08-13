import { useRef, useCallback, useEffect } from "react";
import {
  Background,
  ModalWrapper,
  ModalContent,
  AnimateDiv,
  CloseModalButton,
} from "./style";
import { useSpring } from "react-spring";

const ModalBase = ({
  showModal,
  setShowModal,
  children,
  zindex,
  height,
  width = "",
}) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background zindex={zindex} ref={modalRef} onClick={closeModal}>
          <AnimateDiv height={height} width={width} style={animation}>
            <ModalWrapper>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
              <ModalContent>{children}</ModalContent>
            </ModalWrapper>
          </AnimateDiv>
        </Background>
      ) : null}
    </>
  );
};

export default ModalBase;
