/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import search_icon from "../../assets/svg/search.svg";
import { changeSearchValue } from "src/redux/actions/search";

export default function Searcher({
  styles,
  defaultText = "Buscar en 7meeples.es",
}) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.searchReducer.searchString);
  const onChange = (event) => {
    dispatch(changeSearchValue(event.target.value));
  };

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        ...styles,
      }}
    >
      <div
        sx={{
          backgroundColor: "white",
          position: "relative",
          width: "90%",
          borderRadius: "87px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <input
          sx={{
            zIndex: "11",
            margin: "10px",
            width: "100%",
            height: "24px",
            border: "0",
            outline: "none",
            backgroundColor: "#F7F7F7",
            paddingLeft: "30px",
            fontFamily: "Quicksand",
            fontSize: "16px",
            backgroundColor: "#ffffff00",
          }}
          value={value}
          onChange={onChange}
          type="text"
          id="lname"
          name="lname"
          placeholder={defaultText}
        />
        <img
          sx={{
            position: "absolute",
            right: "calc(10px)",
            top: "calc(50% - 12.5px)",
            height: "25px",
          }}
          src={search_icon}
          alt="buscar"
        />
      </div>
    </div>
  );
}
