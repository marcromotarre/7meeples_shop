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

export const get_designers = async () => {
  return await axios
    .get("/api/designers/getAll")
    .then((response) => {
      return response.data.designers;
    })
    .catch(function (error) {
      console.log(error);
    });
};
