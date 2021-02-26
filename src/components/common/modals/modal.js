/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import close_icon from "../../../assets/svg/close-light.svg";

export default function Modal({ style = {}, onClose = () => {} }) {
  const [className, setClassName] = useState("modal-open");

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
      onAnimationEnd={onAnimationEnd}
      className={className}
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "absolute",
        ...style,
      }}
    >
      <style jsx global>
        {`
          body {
            overflow: ${"hidden"};
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
      <div sx={{ display: "grid", gridTemplateColumns: "40px auto 40px" }}>
        <img
          onClick={handleOnClose}
          src={close_icon}
          sx={{ width: "20px", justifySelf: "center", alignSelf: "center" }}
        />
      </div>
    </div>
  );
}
