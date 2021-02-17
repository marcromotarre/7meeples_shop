const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { id, password } = req.body;
  console.log("id", id);
  console.log("password", password);
  const { update_credentials_by_pk } = await query({
    query: `
        mutation {
            update_credentials_by_pk(pk_columns: {id: ${id}}, _set: {password: "${password}"}) {
                email
            }
        }
    `,
  });
  res.json({
    email: update_credentials_by_pk.email,
  });
  res.statusCode = 200;
};
