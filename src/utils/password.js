import { create_forgot_password_code } from "src/backend/forgot-password";
import { generateCode } from "./code";
import { ForgottenPasswordEmail } from "./email";

export const forgot_password_code_and_email = async ({ email }) => {
  const code = generateCode();
  await create_forgot_password_code({
    email,
    code,
  });
  //send email
  ForgottenPasswordEmail({
    email,
    code,
  });
};
