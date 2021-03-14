export const sequential = ({ to, from = 0 }) =>
  Array.from(Array(to + 1).keys()).slice(from);

export const eliminate_duplicates = (array) => {
  return array
    .filter((item, index) => array.indexOf(item) === index)
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
};
