/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

export default function Modal({ style = {} }) {
  const [className, setClassName] = useState("modal-open");

  const onAnimationEnd = () => {
    console.log("end");
    setClassName("modal-opened");
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
            opacity: 0;
            animation: modal-open-animation 0.8s normal;
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
        `}
      </style>
    </div>
  );
}
