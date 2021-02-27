/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useRef } from "react";
import close_icon from "../../../assets/svg/close-light.svg";

export default function Modal({ style = {}, onClose = () => {}, children }) {
  const modalRef = useRef(null);
  const [className, setClassName] = useState("modal-open");
  const overflow =
    className === "modal-opened" || className === "modal-open"
      ? "hidden"
      : "auto";
  const handleOnClose = () => {
    setClassName("modal-close");
  };

  const onAnimationEnd = () => {
    if (className === "modal-close") {
      setClassName("modal-closed");
      onClose();
    }
    if (className === "modal-open") {
      setClassName("modal-opened");
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
            opacity: 0.95;
          }
          .modal-closed {
            opacity: 0;
          }

          .modal-open {
            animation: modal-open-animation 0.8s normal;
            animation-timing-function: ease;
          }

          .modal-close {
            animation: modal-close-animation 0.8s normal;
            animation-timing-function: ease;
          }

          @keyframes modal-open-animation {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 0.95;
            }
          }

          @keyframes modal-close-animation {
            0% {
              opacity: 0.95;
            }

            100% {
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
        <img
          onClick={handleOnClose}
          src={close_icon}
          sx={{
            gridArea: "close",
            width: "20px",
            justifySelf: "center",
            alignSelf: "center",
          }}
        />
        <div sx={{ gridArea: "inside" }}>{children}</div>
      </div>
    </div>
  );
}
