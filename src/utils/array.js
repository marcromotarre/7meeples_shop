export const sequential = ({ to, from = 0 }) =>
  Array.from(Array(to + 1).keys()).slice(from);
