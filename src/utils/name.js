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