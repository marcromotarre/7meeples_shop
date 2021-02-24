import axios from "axios";
export const get_multiple_designers = async ({ ids }) => {
  return await axios
    .post("/api/designers/get_multiple", {
      ids,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
