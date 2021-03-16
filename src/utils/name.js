export const simple_string = (string = "") => {
  return typeof string === "string"
    ? string
        .toLowerCase()
        .replaceAll("á", "a")
        .replaceAll("é", "e")
        .replaceAll("í", "i")
        .replaceAll("ó", "o")
        .replaceAll("ú", "u")
        .replaceAll("ñ", "n")
        .replaceAll("ç", "c")
        .replaceAll(" ", "")
        .replaceAll("'", "")
        .replaceAll("?", "")
        .replaceAll(":", "")
        .replaceAll(".", "")
        .replaceAll(",", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("¡", "")
        .replaceAll("!", "")
    : string;
};

export const delete_special_characters = (name = "") => {
  return name
    .toLowerCase()
    .replaceAll("á", "a")
    .replaceAll("é", "e")
    .replaceAll("í", "i")
    .replaceAll("ó", "o")
    .replaceAll("ú", "u")
    .replaceAll("ñ", "n")
    .replaceAll("ç", "c")
    .replaceAll("'", "")
    .replaceAll("?", "")
    .replaceAll(":", "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("¡", "")
    .replaceAll("!", "");
};

export const s3_name = (name = "") => {
  return typeof name === "string"
    ? name
        .toLowerCase()
        .replaceAll(" ", "_")
        .replaceAll("á", "a")
        .replaceAll("é", "e")
        .replaceAll("í", "i")
        .replaceAll("ó", "o")
        .replaceAll("ú", "u")
        .replaceAll("ñ", "n")
        .replaceAll("ç", "c")
        .replaceAll("'", "")
        .replaceAll("?", "")
        .replaceAll(":", "")
        .replaceAll(".", "")
        .replaceAll(",", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll("¡", "")
        .replaceAll("!", "")
    : name;
};
