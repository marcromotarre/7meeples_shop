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
  console.log(credentials_confirmation);
  console.log(credentials);
  if (credentials_confirmation.length === 0 && credentials.length === 0) {
    res.json({
      error: "user does not exist",
    });
  }
  if (credentials_confirmation.length > 0 && credentials.length > 0) {
    res.json({
      userVerified: false,
      email: credentials_confirmation[0].email,
    });
  }
  if (credentials.length > 0) {
    res.json({
      userVerified: true,
      email: credentials[0].email,
    });
  }
};
