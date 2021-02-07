import axios from "axios";

export const delete_user_confirmation = async ({ email }) => {
  return await axios
    .post("/api/credentials/deleteConfirmation", {
      email,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const get_user_confirmation = async ({ email, code }) => {
  return await axios
    .post("/api/credentials/getConfirmation", {
      email,
      code,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const add_user = async ({ email, password }) => {
  le.log("add_user email", email);
  return await axios
    .post("/api/credentials/add", {
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

export const add_user_confirmation = async ({ email, code }) => {
  return await axios
    .post("/api/credentials/addConfirmation", {
      email,
      code,
    })
    .then((response) => {
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
  console.log("email_exist");
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
