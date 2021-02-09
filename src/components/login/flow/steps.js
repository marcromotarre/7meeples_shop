import { login_email_view } from "./login-email-view";
import { login_password_view } from "./login-password-view";

export const STEPS_IDS = {
  LOGIN_EMAIL: "login_email",
  LOGIN_PASSWORD: "login_password",
  SIGNUP_PASSWORD: "singup_password",
};

export const steps = [
  {
    id: STEPS_IDS.LOGIN_EMAIL,
    view: ({ goToStep }) => login_email_view({ goToStep }),
  },
  {
    id: STEPS_IDS.LOGIN_PASSWORD,
    view: ({ goToStep }) => login_password_view({ goToStep }),
  },
];
