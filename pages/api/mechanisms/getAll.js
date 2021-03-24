const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { mechanisms } = await query({
    query: `
      query {
        mechanisms {
            id
            name
          }
      }
    `,
  });
  res.statusCode = 200;
  res.json(mechanisms);
};
