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

export const get_user_confirmation_by_email = async ({ email }) => {
  return await axios
    .post("/api/credentials/getConfirmationByEmail", {
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

export const create_account = async ({ email, code, password }) => {
  const addUserConfirmation = await add_user_confirmation({
    email,
    code,
  });
  const addUser = await add_user({
    email,
    password,
  });
};

export const add_user = async ({ email, password }) => {
  return await axios
    .post("/api/credentials/add", {
      email,
      password,
    })
    .then((response) => {
      console.log("response", response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const update = async ({ id, password }) => {
  return await axios
    .post("/api/credentials/update", {
      id,
      password,
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
  console.log(email);
  return await axios
    .post("/api/credentials/get-by-email", {
      email,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log("credentials error", error);
      console.log(error);
    });
};

export const get_by_email = async ({ email }) => {
  console.log(email);
  return await axios
    .post("/api/credentials/get-by-email", {
      email,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log("credentials error", error);
      console.log(error);
    });
};
