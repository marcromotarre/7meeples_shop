import axios from "axios";

export const get_boardgames = async () => {
  return await axios
    .get("/api/boardgames/getAll")
    .then((response) => {
      return response.data.boardgames;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const get_boardgame = async ({ id }) => {
  return await axios
    .post("/api/boardgames/get", {
      id,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const get_multiple_boardgames = async ({ ids }) => {
  console.log(ids);
  return await axios
    .post("/api/boardgames/get_multiple", {
      ids,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
