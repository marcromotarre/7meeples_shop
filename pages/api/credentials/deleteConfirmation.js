const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const { delete_credentials_confirmation } = await query({
    query: `
        mutation {
            delete_credentials_confirmation(where: {email: {_eq: "${email}"}}) {
                returning {
                    email
                }
            }
        }
    `,
  });
  res.statusCode = 200;
  if (delete_credentials_confirmation.returning.length > 0) {
    res.json({
      ok: "boom",
    });
  }
  res.json({
    error: "cannot delete",
  });
};
