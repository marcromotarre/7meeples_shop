export const get_common_boardgames = ({ boardgames, designers }) => {
  const designers_ids = designers.map(({ id }) => id);
  return boardgames.filter(
    (boardgame) =>
      designers_ids
        .map((designer_id) => boardgame.designers.includes(designer_id))
        .filter((val) => val === true).length === designers.length
  );
};
