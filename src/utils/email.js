import * as emailjs from "emailjs-com";

export const isValidEmail = (email = "") => {
  return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
};

export const ActivateAccountEmail = ({ email, code }) => {
  emailjs.init("user_sPHGcdHgcVXLs7LWlTX7I");
  return emailjs.send(
    "service_s2swtsk",
    "template_0qyubac",
    {
      email,
      code,
    },
    "user_sPHGcdHgcVXLs7LWlTX7I"
  );
};

export const ForgottenPasswordEmail = ({ email, code, date }) => {
  emailjs.init("user_oYj4pDbf2EzuhE6CVOKe5");
  return emailjs.send(
    "service_btaer5s",
    "template_2wrgxog",
    {
      email,
      code,
      date,
    },
    "user_oYj4pDbf2EzuhE6CVOKe5"
  );
};
