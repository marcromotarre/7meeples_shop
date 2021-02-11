export const getText = (text, vars = {}) => {
  return Object.keys(vars).reduce((acc, varKey) => {
    return acc.replace(`{{${varKey}}}`, vars[varKey]);
  }, text);
};
