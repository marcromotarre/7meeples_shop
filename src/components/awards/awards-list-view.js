/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import MenuItem from "src/components/menu/menu-item";

export const ID = "AWARDS-LIST-VIEW";
export default function awards_list_view({ setGoToStep, data, setData }) {
  const clickOnAward = (id) => {
    setGoToStep(id);
  };

  return (
    <div
      sx={{
        width: "100%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        rowGap: "15px",
      }}
    >
      <span
        sx={{
          textAlign: "center",
          width: "75%",
          fontStyle: "italic",
          fontWeight: "100",
        }}
      >
        Estas son nuestras recomendaciones por cada categoria
      </span>
      {data.categories.map((category) => (
        <MenuItem
          key={category.id}
          onClick={() => clickOnAward(category.id)}
          width={"90%"}
          text={category.name}
          icon={category.icon}
        ></MenuItem>
      ))}
    </div>
  );
}
