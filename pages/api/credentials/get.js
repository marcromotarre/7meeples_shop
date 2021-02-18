const { query } = require("../../../utils/hasura");
var passwordHash = require("password-hash");

export default async (req, res) => {
  const { email, password } = req.body;
  const user = await query({
    query: `
      query {
          credentials(where: {email: {_eq: "${email}"}}) {
            email
            password
          }
        }
    `,
  });
  if (user.credentials.length > 0) {
    const credentials = user.credentials[0];
    if (passwordHash.verify(password, credentials.password)) {
      res.json({ id: credentials.id, email: credentials.email });
    } else {
      res.statusCode = 200;
      res.json({ error: "password incorrect" });
    }
  }

  res.statusCode = 200;
  res.json({ error: "user does not exist" });
};
