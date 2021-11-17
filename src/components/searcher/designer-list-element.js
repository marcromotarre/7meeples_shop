/** @jsxImportSource theme-ui */
import DesignerImage from "../common/images/designer-image";
import { useRouter } from "next/router";

export default function DesignerListElement({ element, styles }) {
  const { id, name } = element;
  const height = styles?.height ? styles.height : "100%";

  const router = useRouter();
  const onClickDesginer = () => {
    router.push(`/autores/${id}(${name})`);
  };
  return (
    <div
      onClick={onClickDesginer}
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "40px auto ",
        columnGap: "20px",
        ...styles,
      }}
    >
      <DesignerImage
        name={name}
        styles={{
          justifySelf: "center",
          alignSelf: "center",
          objectFit: "contain",
          width: "100%",
          maxHeight: styles.maxHeight,
          maxWidth: styles.maxWidth,
        }}
      ></DesignerImage>
      <div sx={{ justifySelf: "start", alignSelf: "center" }}>{name}</div>
    </div>
  );
}
