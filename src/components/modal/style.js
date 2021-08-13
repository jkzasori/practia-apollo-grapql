import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { animated } from "react-spring";
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(222, 222, 222, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => (props.zindex ? props.zindex : 10)};
  @media (max-width: 767px) {
    margin-top: 7.3rem;
  }
`;
export const AnimateDiv = styled(animated.div)`
  width: ${(props) => (props.width ? props.width : "60%")};
  height: ${(props) => (props.height ? props.height : "65%")};
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0.3rem 0.3rem 0px 1px #a9a9a9;
  background-color: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
`;

export const ModalContent = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 1rem;
  height: 1rem;
  padding: 0;
  z-index: 10;
  background: white;
  border-radius: 2rem;
  @media (max-width: 767px) {
    width: 3rem;
    height: 3rem;
  }
`;
