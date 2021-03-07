import axios from "axios";

export const get_newness = async () => {
  return await axios
    .get("/api/newness/get_boardgames")
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
