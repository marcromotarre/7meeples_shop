const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { awards } = await query({
    query: `
      query {
        awards {
            id
            name
          }
      }
    `,
  });
  res.statusCode = 200;
  res.json(awards);
};
