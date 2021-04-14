export const get_common_boardgames = ({ boardgames, designers }) => {
  const designers_ids = designers.map(({ id }) => id);
  return boardgames.filter(
    (boardgame) =>
      designers_ids
        .map((designer_id) => boardgame.designers.includes(designer_id))
        .filter((val) => val === true).length === designers.length
  );
};

export const get_boardgames_by_families = ({ boardgames, families }) => {
  return boardgames.filter((boardgame) => {
    return (
      families
        .map((family) => boardgame.families.includes(family).length > 0)
        .includes(true).length > 0
    );
  });
};
