import axios from "axios";

export const email_exist = async ({ email }) => {
  console.log(email);
  return await axios
    .post("/api/credentials-confirmation/get-by-email", {
      email,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log("credentials-confirmation error", error);
      console.log(error);
    });
};

export const add_user = async ({ email, code }) => {
  return await axios
    .post("/api/credentials-confirmation/add", {
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
