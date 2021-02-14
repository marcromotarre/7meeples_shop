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
    code,
  });
};

export const add_user = async ({ email, password }) => {
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
  return await axios
    .post("/api/credentials/getByEmail", {
      email,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const has_forgotten_password_code = async ({ email }) => {
  const { exist } = await axios
    .post("/api/credentials/hasEmailForgottenPasswordCode", {
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
  const { exist } = await axios
    .post("/api/credentials/updateForgotPasswordCode", {
      email,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const get_forgotten_password_code = async ({ email, code }) => {
  return await axios
    .post("/api/credentials/getForgotPasswordCode", {
      email,
    })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const create_forgot_password_code = async ({ email, code }) => {
  const { exist } = await has_forgotten_password_code({ email });
  if (exist) {
    return await update_forgotten_password_code({ email, code });
  } else {
    return await get_forgotten_password_code({ email, code });
  }
};
