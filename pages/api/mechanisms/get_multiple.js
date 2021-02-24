const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const { ids } = req.body;

  const { mechanisms } = await query({
    query: `
      query {
        mechanisms(where: {id: {_in: [${ids}]}}) {
            id
            name
            webname
        }
      }
    `,
  });
  res.statusCode = 200;
  res.json(mechanisms);
};
