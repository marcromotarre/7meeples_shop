export default () => (
  <style jsx global>
    {`
      .step-left-start,
      .step-right-start {
        left: 0%;
      }

      .left-to-right {
        animation: left-to-right-animation 0.4s normal;
        animation-timing-function: ease;
      }
      .right-to-left {
        animation: right-to-left-animation 0.4s normal;
        animation-timing-function: ease;
      }

      @keyframes left-to-right-animation {
        0% {
          left: 0%;
        }

        100% {
          left: -100%;
        }
      }

      @keyframes right-to-left-animation {
        0% {
          left: -100%;
        }

        100% {
          left: 0%;
        }
      }
    `}
  </style>
);
