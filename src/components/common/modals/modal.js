/** @jsxImportSource theme-ui */
import { useState, useRef } from "react";
import close_icon from "../../../assets/svg/close-light.svg";
import Image from "next/image";
import React from "react";

const ANIMATION = {
  TIME: 0.8,
  OPACITY: 1,
  CHILDREN_MOVEMENT: 10,
};

export default function Modal({ style = {}, onClose = () => {}, children }) {
  const modalRef = useRef(null);
  const [className, setClassName] = useState("modal-open");
  const [childrenClassName, setChildrenClassName] = useState(
    "modal-children-open"
  );
  const overflow =
    className === "modal-opened" || className === "modal-open"
      ? "hidden"
      : "auto";
  const handleOnClose = () => {
    setClassName("modal-close");
    setChildrenClassName("modal-children-close");
  };

  const onAnimationEnd = () => {
    if (className === "modal-close") {
      setClassName("modal-closed");
      setChildrenClassName("modal-children-closed");
      onClose();
    }
    if (className === "modal-open") {
      setClassName("modal-opened");
      setChildrenClassName("modal-children-opened");
    }
  };
  return (
    <div
      ref={modalRef}
      onAnimationEnd={onAnimationEnd}
      className={className}
      sx={{
        width: "100%",
        height: `calc(100% - ${
          modalRef?.current?.offsetTop ? modalRef.current.offsetTop : 0
        }px)`,
        backgroundColor: "white",
        position: "fixed",
        ...style,
      }}
    >
      <style jsx global>
        {`
          body {
            overflow: ${overflow};
          }

          .modal-opened {
            opacity: ${ANIMATION.OPACITY};
          }
          .modal-closed {
            opacity: 0;
          }

          .modal-open {
            animation: modal-open-animation ${ANIMATION.TIME}s normal;
            animation-timing-function: ease;
          }

          .modal-close {
            animation: modal-open-animation ${ANIMATION.TIME}s reverse;
            animation-timing-function: ease;
          }

          @keyframes modal-open-animation {
            0% {
              opacity: 0;
            }

            100% {
              opacity: ${ANIMATION.OPACITY};
            }
          }

          .modal-children-opened {
            padding-top: 0px;
          }
          .modal-children-closed {
            padding-top: ${ANIMATION.CHILDREN_MOVEMENT}px;
          }

          .modal-children-open {
            animation: modal-children-open-animation ${ANIMATION.TIME}s normal;
            animation-timing-function: ease;
          }

          .modal-children-close {
            animation: modal-children-close-animation ${ANIMATION.TIME}s normal;
            animation-timing-function: ease;
          }

          @keyframes modal-children-open-animation {
            0% {
              padding-top: ${ANIMATION.CHILDREN_MOVEMENT}px;
            }

            100% {
              padding-top: 0px;
            }
          }

          @keyframes modal-children-close-animation {
            0% {
              padding-top: 0px;
              opacity: 1;
            }

            80% {
              opacity: 0;
            }

            100% {
              padding-top: ${ANIMATION.CHILDREN_MOVEMENT}px;
              opacity: 0;
            }
          }
        `}
      </style>
      <div
        sx={{
          display: "grid",
          width: "100%",
          height: "100%",
          gridTemplateColumns: "40px auto 40px",
          gridTemplateRows: "40px auto 40px",
          gridTemplateAreas: `"close . ." ". inside ." ". . ."`,
        }}
      >
        <Image
          alt=""
          onClick={handleOnClose}
          src={close_icon}
          sx={{
            gridArea: "close",
            width: "20px",
            justifySelf: "center",
            alignSelf: "center",
          }}
        />
        <div className={childrenClassName} sx={{ gridArea: "inside" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
