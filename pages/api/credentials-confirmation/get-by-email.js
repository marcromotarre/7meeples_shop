const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email } = req.body;
  const { credentials_confirmation } = await query({
    query: `
      query {
        credentials_confirmation(where: {email: {_eq: "${email}"}}) {
          email
        }
      }
    `,
  });

  res.statusCode = 200;
  res.json({
    email: credentials_confirmation[0]
      ? credentials_confirmation[0].email
      : undefined,
    exist: credentials_confirmation[0] ? true : false,
  });
};
