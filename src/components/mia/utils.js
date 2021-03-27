export const remove = ({ original, to_delete }) => {
  if (!to_delete) return original;
  return original.filter(
    ({ id }) =>
      !to_delete.map((to_delete_item) => to_delete_item.id).includes(id)
  );
};
