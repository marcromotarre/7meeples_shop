const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email, password } = req.body;
  console.log("email", email);
  console.log("password", password);
  const { update_credentials_by_pk } = await query({
    query: `
        mutation {
            update_credentials_by_pk(pk_columns: {email: "${email}"}, _set: {password: "${password}"}) {
                email
            }
        }
    `,
  });
  console.log("update_credentials_by_pk", update_credentials_by_pk);
  res.json({
    email: update_credentials_by_pk?.email,
    error: update_credentials_by_pk === null,
  });
  res.statusCode = 200;
};
