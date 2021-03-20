/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import search_icon from "../../assets/svg/search.svg";
import cancel_icon from "../../assets/svg/cancel.svg";
import { changeSearchValue } from "src/redux/actions/search";
import React, { useState } from "react";

/*
<>
      {searchValue !== "" && (
        
      )}
      <div sx={{ display: "grid", rowGap: "50px" }}>
        <div sx={{ width: "100%" }}>
          <div sx={{ width: "100%" }}>
            <Searcher
              styles={{
                marginTop: "20px",
                zIndex: "2",
                position: searchValue === "" ? "relative" : "fixed",
              }}
              onChangeValue={(value) => dispatch(changeSearchValue(value))}
            ></Searcher>
          </div>

          {searchValue !== "" && (
            
          )}
        </div>

*/
export default function Searcher({
  styles,
  defaultValue = "",
  defaultText = "Buscar en 7meeples.es",
  onChangeValue = () => {},
}) {
  const [value, SetValue] = useState(defaultValue);
  const onChange = (event) => {
    onChangeValue(event.target.value);
    SetValue(event.target.value);
  };

  const cleanSearch = () => {
    onChangeValue("");
    SetValue("");
  };

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#ffffff00",
        position: "relative",
        ...styles,
      }}
    >
      <div
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: "87px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          rowGap: "10px",
          backgroundColor: "white",
        }}
      >
        <input
          sx={{
            margin: "10px",
            width: "100%",
            height: "24px",
            border: "0",
            outline: "none",
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
        {value && (
          <img
            onClick={cleanSearch}
            sx={{
              position: "absolute",
              right: "calc(14px)",
              top: "calc(50% - 7.5px)",
              height: "15px",
            }}
            src={cancel_icon}
            alt="buscar"
          />
        )}
        {!value && (
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
        )}
      </div>
    </div>
  );
}
