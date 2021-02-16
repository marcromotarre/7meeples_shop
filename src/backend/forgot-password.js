import axios from "axios";

export const get = async ({ email, code }) => {
  return await axios
    .post("/api/forgot-password/get", {
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

export const has_forgotten_password_code = async ({ email }) => {
  return await axios
    .post("/api/forgot-password/exist", {
      email,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const update_forgotten_password_code = async ({ email, code }) => {
  return await axios
    .post("/api/forgot-password/update", {
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

export const add_forgotten_password_code = async ({ email, code }) => {
  return await axios
    .post("/api/forgot-password/add", {
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

export const create_forgot_password_code = async ({ email, code }) => {
  console.log("code", code);
  const { exist } = await has_forgotten_password_code({ email });
  console.log(exist);
  if (exist) {
    return await update_forgotten_password_code({ email, code });
  } else {
    return await add_forgotten_password_code({ email, code });
  }
};
