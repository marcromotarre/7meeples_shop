const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email } = req.body;

  const { credentials } = await query({
    query: `
      query {
        credentials(where: {email: {_eq: "${email}"}}) {
          email
        }
      }
    `,
  });

  res.statusCode = 200;
  res.json({
    email: credentials[0] ? credentials[0].email : undefined,
    exist: credentials[0] ? true : false,
  });
};
