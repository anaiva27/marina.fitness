import React, { useState } from "react";
import styled from "styled-components";
import { Portal } from "./Portal";
import { useClickOutside } from "./useClickOutside";
import { useOverlay } from "./useOverlay";
// import { motion, AnimatePresence } from "framer-motion";
// import { modalDropIn } from "Assets/Animate";

export const ModalWrapper = styled.div`
  top: 0px;
  left: 0px;
  margin: 0px;
  position: fixed;
  display: block;
  z-index: 500;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  background: black;
  opacity: 0.8;
  pointer-events: none;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 34px 40px;
  margin: max(7vh, 40px) auto 40px;
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.05);
  width: 100%;
  position: relative;
  z-index: 2;
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 10;
  font-size: 20px;
  font-weight: 900;
`;

const modalWidths = {
  small: 476,
  medium: 676,
  large: 876,
};

export const Modal = ({
  isOpen,
  onClose,
  header,
  variant = "small",
  children,
  className,
  ...props
}) => {
  const [ref, setRef] = useState(null);
  useOverlay(!!isOpen);
  useClickOutside(ref, onClose ? onClose : () => null);

  return (
    <>
      {isOpen && (
        <Portal>
          <ModalWrapper>
            <ModalContainer
              //   as={motion.div}
              //   variants={modalDropIn}
              //   initial="initial"
              //   animate="animate"
              //   exit="exit"
              {...props}
              style={{ maxWidth: modalWidths[variant], ...props.style }}
              ref={setRef}
            >
              {children}
              <CloseIcon
                onClick={() => {
                  if (onClose) onClose();
                }}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                    fill="#000000"
                  />
                </svg>
              </CloseIcon>
            </ModalContainer>
            <ModalBackdrop
              onClick={() => {
                if (onClose) onClose();
              }}
            />
          </ModalWrapper>
        </Portal>
      )}
    </>
  );
};
