const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email, code } = req.body;
  const { insert_forgot_password_one } = await query({
    query: `
    mutation {
        insert_forgot_password_one(object: {email: "${email}", code: "${code}"}) {
          email
          date
          code
        }
      }
      
    `,
  });
  if (insert_forgot_password_one.length > 0) {
    res.json(insert_forgot_password_one);
    res.statusCode = 200;
  }

  res.statusCode = 200;
  res.json({ error: "cannot generate forgoten password code" });
};
