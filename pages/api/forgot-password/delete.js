const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email } = req.body;
  await query({
    query: `
    mutation {
        delete_forgot_password(where: {email: {_eq: "${email}"}}) {
          returning {
            email
          }
        }
      }
      
    `,
  });
  res.json({});
  res.statusCode = 200;
};
