const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const user = await query({
    query: `
      query {
        credentials(where: {email: {_eq: "${email}"}}) {
          email
        }
      }
    `,
  });
  res.statusCode = 200;
  res.json({
    userExist: user.credentials[0] ? true : false,
    email: user.credentials[0] ? user.credentials[0] : "",
  });
};
