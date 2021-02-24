import axios from "axios";
export const get_multiple_categories = async ({ ids }) => {
  return await axios
    .post("/api/categories/get_multiple", {
      ids,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
