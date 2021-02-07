const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email, code } = req.body;
  const user_confirmation = await query({
    query: `
    mutation  {
        insert_credentials_confirmation_one(object: {code: "${code}", email: "${email}"}) {
          email
        }
      }
      
    `,
  });
  res.statusCode = 200;
  if (!user_confirmation) {
    res.json({
      created: false,
      email: email,
    });
  }
  res.json({
    email: email,
    created: true,
  });
};
