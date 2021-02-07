const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email, password, code } = req.body;
  const user_confirmation = await query({
    query: `
    mutation  {
        insert_credentials_confirmation_one(object: {code: "${code}", email: "${email}", password: "${password}"}) {
          email
        }
      }
      
    `,
  });
  res.statusCode = 200;
  console.log(user_confirmation);
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
