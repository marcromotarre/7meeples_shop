/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import { s3_name } from "../../utils/name";
import { IMAGES_REPOSITORY } from "src/constants";
import SectionTitle from "../sections/section-title";
import { useRouter } from "next/router";

export default function Category({ id, name, icon }) {
  const router = useRouter();
  const handleClickCategory = () => {
    router.push(`/categorias/${id}`);
  };
  return (
    <div
      onClick={handleClickCategory}
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
