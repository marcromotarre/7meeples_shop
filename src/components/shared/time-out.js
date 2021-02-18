/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { Button, Loading } from "../common";

export default function TimeOut({ action }) {
  const { name, onClick, loading } = action;

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>el codigo ha caducado</span>
      <span>genera un nuevo código pulsando el boton</span>
      {loading && <Loading></Loading>}
      {!loading && <Button onClick={onClick}>{name}</Button>}
    </div>
  );
}
