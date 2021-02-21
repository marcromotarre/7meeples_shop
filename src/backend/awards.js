import axios from "axios";

export const get_awards = async () => {
  return await axios
    .get("/api/awards/getAll")
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const get_award = async ({ id }) => {
  return await axios
    .post("/api/awards/get", {
      id,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
