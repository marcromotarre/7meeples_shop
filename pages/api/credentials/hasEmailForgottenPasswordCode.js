const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email } = req.body;
  const { forgot_password_by_pk } = await query({
    query: `
        query MyQuery {
            forgot_password_by_pk(email: "${email}") {
                email
            }
        }
    
    `,
  });

  res.json({ exist: forgot_password_by_pk ? true : false });
  res.statusCode = 200;
};
