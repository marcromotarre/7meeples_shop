const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email, code } = req.body;
  const { credentials_confirmation } = await query({
    query: `
      query {
          credentials_confirmation(where: {email: {_eq: "${email}"}, code: {_eq: "${code}"}}) {
            email
          }
        }
    `,
  });
  if (credentials_confirmation.length > 0) {
    const { email } = credentials_confirmation[0];
    res.json({ email });
    res.statusCode = 200;
  }

  res.statusCode = 200;
  res.json({ error: "user does not exist" });
};
