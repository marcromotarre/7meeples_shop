import axios from "axios";

export const get_families = async () => {
  return await axios
    .get("/api/families/getAll")
    .then((response) => {
      return response.data.families;
    })
    .catch(function (error) {
      console.log(error);
    });
};
