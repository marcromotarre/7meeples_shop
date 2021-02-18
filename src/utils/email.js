import * as emailjs from "emailjs-com";
import { getDateFormated, getTommorrow } from "./date";

export const isValidEmail = (email = "") => {
  return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
};

export const ActivateAccountEmail = ({ email, code }) => {
  return emailjs.send(
    "service_klj16k6",
    "template_0qyubac",
    {
      email,
      code,
      reply_to: "no-reply@7meeples.es",
    },
    "user_sPHGcdHgcVXLs7LWlTX7I"
  );
};

export const ForgottenPasswordEmail = ({ email, code }) => {
  const date = getDateFormated(getTommorrow());
  return emailjs.send(
    "service_klj16k6",
    "template_e29ihay",
    {
      email,
      code,
      date,
      reply_to: "no-reply@7meeples.es",
    },
    "user_sPHGcdHgcVXLs7LWlTX7I"
  );
};
