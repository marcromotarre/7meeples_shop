/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import Square from "src/components/common/slider/square";
import { useRouter } from "next/router";

export default function Slider({ elements = [], styles }) {
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "start",
        alignItems: "start",
        rowGap: "10px",
        height: "fit-content",
        ...styles,
      }}
    >
      <h3
        sx={{
          paddingLeft: "30px",
        }}
      >
        Colecciones
      </h3>
      <div
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          sx={{
            position: "relative",
            paddingLeft: "30px",
            paddingBottom: "20px",
            display: "grid",
            width: "100%",
            gridTemplateColumns: [
              `repeat(${elements.length}, 40%) 15px`,
              `repeat(${elements.length}, 20%) 15px`,
            ],
            alignItems: "center",
            justifyItems: "center",
            columnGap: "15px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {elements.map(
            ({ image, color, webname, id, full, click = () => {} }) => (
              <Square
                image={image}
                color={color}
                name={webname}
                id={id}
                full={full}
                showName={true}
                onClick={click}
              />
            )
          )}
          <div sx={{ height: "100%", width: "10px" }}></div>
        </div>
      </div>
    </div>
  );
}
