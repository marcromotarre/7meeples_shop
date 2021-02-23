const { query } = require("./../../../utils/hasura");

export default async (req, res) => {
  const { id } = req.body;
  const { awards_by_pk } = await query({
    query: `
      query {
        awards_by_pk(id: ${id}) {
          id
          name
          icon
          boardgames
          description
        }
      }
    `,
  });
  res.statusCode = 200;
  res.json(awards_by_pk);
};
