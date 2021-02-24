import axios from "axios";
export const get_multiple_mechanisms = async ({ ids }) => {
  return await axios
    .post("/api/mechanisms/get_multiple", {
      ids,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
