const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { ids } = req.body;

  const { categories } = await query({
    query: `
      query {
        categories(where: {id: {_in: [${ids}]}}) {
            id
            name
            webname
        }
      }
    `,
  });
  res.statusCode = 200;
  res.json(categories);
};
