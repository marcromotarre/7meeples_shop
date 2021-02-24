const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { ids } = req.body;

  const { designers } = await query({
    query: `
      query {
        designers(where: {id: {_in: [${ids}]}}) {
            id
            name
        }
      }
    `,
  });
  res.statusCode = 200;
  res.json(designers);
};
