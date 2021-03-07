const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { ids } = req.body;

  const { newness } = await query({
    query: `
      query {
        newness {
            year
            month
            boardgames
          }
        }
    `,
  });
  res.statusCode = 200;
  res.json(newness);
};
