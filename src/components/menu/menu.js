/** @jsxImportSource theme-ui */
import MenuItem from "./menu-item";
import MenuFiller from "./menu-filler";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Menu() {
  const [menuState, setMenuOpenState] = useState("menu-closed");
  const [menuItemState, setMenuItemState] = useState([
    "menu-item-hidden",
    "menu-item-hidden",
    "menu-item-hidden",
    "menu-item-hidden",
    "menu-item-hidden",
    "menu-item-hidden",
    "menu-item-hidden",
    "menu-item-hidden",
    "menu-item-hidden",
  ]);

  const opened = useSelector((state) => state.open);
  if (opened && menuState === "menu-closed") {
    setMenuOpenState("menu-opened");
    const array = [...menuItemState];
    array[0] = "menu-item-show-animation";
    setMenuItemState(array);
  }
  if (!opened && menuState === "menu-opened") {
    setMenuOpenState("menu-closed");
    const array = [...menuItemState];
    array[menuItemState.length - 1] = "menu-item-hide-animation";
    setMenuItemState(array);
  }

  const animationMenuItemEnd = (itemNumber) => {
    const array = [...menuItemState];
    if (menuState === "menu-opened") {
      array[itemNumber] = "menu-item-showed";
      if (itemNumber < array.length - 1)
        array[itemNumber + 1] = "menu-item-show-animation";
    } else {
      array[itemNumber] = "menu-item-hidden";
      if (itemNumber > 0) array[itemNumber - 1] = "menu-item-hide-animation";
    }
    setMenuItemState(array);
  };

  return (
    <div
      className={menuState}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        width: "100%",
      }}
    >
      <>
        <MenuItem
          onAnimationEnd={() => animationMenuItemEnd(0)}
          className={menuItemState[0]}
          index={0}
        ></MenuItem>
        <MenuItem
          onAnimationEnd={() => animationMenuItemEnd(1)}
          className={menuItemState[1]}
          index={1}
        ></MenuItem>
        <MenuItem
          onAnimationEnd={() => animationMenuItemEnd(2)}
          className={menuItemState[2]}
          index={2}
        ></MenuItem>
        <MenuItem
          onAnimationEnd={() => animationMenuItemEnd(3)}
          className={menuItemState[3]}
          index={3}
        ></MenuItem>
        <MenuItem
          onAnimationEnd={() => animationMenuItemEnd(4)}
          className={menuItemState[4]}
          index={4}
        ></MenuItem>
        <MenuItem
          onAnimationEnd={() => animationMenuItemEnd(5)}
          className={menuItemState[5]}
          index={5}
        ></MenuItem>
        <MenuItem
          onAnimationEnd={() => animationMenuItemEnd(6)}
          className={menuItemState[6]}
          index={6}
        ></MenuItem>
        <MenuItem
          onAnimationEnd={() => animationMenuItemEnd(7)}
          className={menuItemState[7]}
          index={7}
        ></MenuItem>
        <MenuFiller
          onAnimationEnd={() => animationMenuItemEnd(8)}
          className={menuItemState[8]}
          index={8}
        ></MenuFiller>
      </>
    </div>
  );
}
