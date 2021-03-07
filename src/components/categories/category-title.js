/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { s3_name } from "../../utils/name";
import { IMAGES_REPOSITORY } from "src/constants";
import SectionTitle from "../sections/section-title";

export default function CategoryTitle({ name, icon }) {
  return (
    <div
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "10px",
      }}
    >
      {icon && (
        <SectionTitle
          styles={{ padding: "10px 0px" }}
          title={name}
          icon={icon}
        ></SectionTitle>
      )}
    </div>
  );
}
