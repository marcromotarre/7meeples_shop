/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import Searcher from "src/components/searcher/searcher";
import { useSelector } from "react-redux";
import { simple_string } from "src/utils/name";
import List from "src/components/common/list/list";
import DesignerButton from "src/components/designers/designer-button";

export default function Autores() {
  const searchValue = useSelector((state) => state.searchReducer.searchString);
  const all_desginers = useSelector(
    (state) => state.designersReducer.designers
  );

  const designers = all_desginers.filter(({ name }) =>
    simple_string(name).includes(simple_string(searchValue))
  );
  console.log(designers);
  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "100%",
        justifyItems: "flex-start",
        alignItems: "center",
        gridTemplateRows: "10px 40px calc(100% - 100px)",
        height: "100%",
      }}
    >
      <div
        sx={{
          width: "100%",
        }}
      ></div>
      <Searcher
        styles={{ zIndex: "10" }}
        defaultText="Escribe el nombre del Autor"
      ></Searcher>
      <List styles={{ marginTop: "70px", overflowY: "scroll", height: "100%" }}>
        {designers.map((designer) => (
          <DesignerButton
            styles={{ width: "300px" }}
            designer={designer}
          ></DesignerButton>
        ))}
      </List>
    </div>
  );
}
