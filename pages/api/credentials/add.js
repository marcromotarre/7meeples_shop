const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email, password } = req.body;
  const user_created = await query({
    query: `
    mutation  {
        insert_credentials_one(object: {email: "${email}", password: "${password}"}) {
          email
        }
      }
      
    `,
  });
  res.statusCode = 200;
  res.json({
    created: !!user_created,
    email: email,
  });
};
