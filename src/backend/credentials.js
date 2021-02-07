import axios from "axios";

export const add_user_confirmation = async ({ email, password, code }) => {
  return await axios
    .post("/api/credentials/addConfirmation", {
      email,
      password,
      code,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const get_user = async ({ email, password }) => {
  return await axios
    .post("/api/credentials/get", {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const email_exist = async ({ email }) => {
  return await axios
    .post("/api/credentials/getByEmail", {
      email,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
