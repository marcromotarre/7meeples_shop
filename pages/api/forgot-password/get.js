const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email, code } = req.body;
  const { forgot_password } = await query({
    query: `
        query {
            forgot_password(where: {email: {_eq: "${email}"}, code: {_eq: "${code}"}}) {
                email
                code
                date
            }
        }
    `,
  });

  if (forgot_password.length > 0) {
    res.json({
      email: forgot_password[0].email,
      code: forgot_password[0].code,
      date: forgot_password[0].date,
    });
    res.statusCode = 200;
  }

  res.statusCode = 200;
  res.json({ error: "generated code not found" });
};
