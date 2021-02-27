/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Modal } from "../../common/index";
import BoardgameModalPlayTime from "./boardgame-modal-play-time";
import BoardgameModalAge from "./boardgame-modal-age";
import BoardgameModalCategories from "./boardgame-modal-categories";
import BoardgameModalDesigners from "./boardgame-modal-designers";
import BoardgameModalMechanisms from "./boardgame-modal-mechanisms";
import BoardgameModalWeight from "./boardgame-modal-weight";
import BoardgameModalNumPlayers from "./boardgame-modal-number-players";

export const TYPES = {
  CATEGORIES: "CATEGORIES",
  MECHANISMS: "MECHANISMS",
  DESIGNERS: "DESIGNERS",
  AGE: "AGE",
  WEIGHT: "WEIGHT",
  NUM_PLAYERS: "NUM_PLAYERS",
  PLAY_TIME: "PLAY_TIME",
};

export default function BoardgameModal({
  boardgame = {},
  onClose = () => {},
  type = "",
}) {
  return (
    <>
      {type !== "" && (
        <Modal onClose={onClose}>
          {type === TYPES.PLAY_TIME && (
            <BoardgameModalPlayTime boardgame={boardgame} />
          )}
          {type === TYPES.AGE && <BoardgameModalAge boardgame={boardgame} />}
          {type === TYPES.CATEGORIES && (
            <BoardgameModalCategories boardgame={boardgame} />
          )}
          {type === TYPES.WEIGHT && (
            <BoardgameModalWeight boardgame={boardgame} />
          )}
          {type === TYPES.DESIGNERS && (
            <BoardgameModalDesigners boardgame={boardgame} />
          )}
          {type === TYPES.MECHANISMS && (
            <BoardgameModalMechanisms boardgame={boardgame} />
          )}
          {type === TYPES.NUM_PLAYERS && (
            <BoardgameModalNumPlayers boardgame={boardgame} />
          )}
        </Modal>
      )}
    </>
  );
}
