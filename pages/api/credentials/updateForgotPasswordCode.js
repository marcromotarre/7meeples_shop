const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email, code } = req.body;
  const { update_forgot_password_by_pk } = await query({
    query: `
        mutation {
        update_forgot_password_by_pk(pk_columns: {email: "${email}"}, _set: {code: "${code}", date: "now()"}) {
          code
          date
          email
        }
      }
      
    `,
  });
  const { code, date, email: emailUpdated } = update_forgot_password_by_pk;
  res.json({
    email: update_forgot_password_by_pk.email,
    code: update_forgot_password_by_pk.code,
    date: update_forgot_password_by_pk.date,
  });
  res.statusCode = 200;
};
