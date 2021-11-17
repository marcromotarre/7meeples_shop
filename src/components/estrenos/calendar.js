/** @jsxImportSource theme-ui */
import calendar from "../../assets/svg/meeplestrenos/calendar.svg";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Calendar({ year, months, styles = {} }) {
  console.log(styles.width, (100 - styles.width) / 2 + styles.width / 2);

  const monthStyles = {};
  return (
    <div
      sx={{
        width: "100%",
        position: "relative",
        ...styles,
      }}
    >
      <span
        sx={{
          position: "absolute",
          width: "50%",
          left: "25%",
          top: "12%",
          textAlign: "center",
          fontSize: "34px",
          color: "white",
        }}
      >
        {year}
      </span>
      <div
        sx={{
          width: "90%",
          justifyItems: "center",
          alignItems: "center",
          left: "5%",
          top: "43%",
          height: "50%",
          position: "absolute",
          display: "grid",
          gridTemplateColumns: "33.3% 33.4% 33.3%",
          gridTemplateRows: "25% 25% 25% 25%",
        }}
      >
        <span sx={monthStyles}>ENE</span>
        <span sx={monthStyles}>FEB</span>
        <span sx={monthStyles}>MAR</span>
        <span sx={monthStyles}>ABR</span>
        <span sx={monthStyles}>MAY</span>
        <span sx={monthStyles}>JUN</span>
        <span sx={monthStyles}>JUL</span>
        <span sx={monthStyles}>AGO</span>
        <span sx={monthStyles}>SEP</span>
        <span sx={monthStyles}>OCT</span>
        <span sx={monthStyles}>NOV</span>
        <span sx={monthStyles}>DIC</span>
      </div>
      <Image src={calendar} sx={{ width: "100%" }}></Image>
    </div>
  );
}
