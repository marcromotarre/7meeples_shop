/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { s3_name } from "src/utils/name";

export default function Square({
  id,
  name = "",
  image,
  full = false,
  color = "#fff",
  styles,
  onClick = () => {},
  showName = false,
}) {
  console.log("name", name);
  return (
    <div
      key={id}
      onClick={() => onClick(id, s3_name(name))}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "auto auto",
        alignItems: "center",
        rowGap: "10px",
        justifyItems: "center",
        ...styles,
      }}
    >
      <div
        sx={{
          borderRadius: "10px",
          boxShadow: "rgb(0 0 0 / 10%) 0px 10px 10px",
          width: "100%",
          position: "relative",
          paddingTop: "100%",
          display: "flex",
          background: color,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          sx={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            sx={{
              borderRadius: full ? "10px" : "0px",
              display: "block",
              width: full ? "100%" : "90%",
              height: "auto",
              maxHeight: full ? "100%" : "90%",
              objectFit: "contain",
            }}
            src={image}
          ></img>
        </div>
      </div>
      {showName && <p>{name ? name : " . "}</p>}
    </div>
  );
}
