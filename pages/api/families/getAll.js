const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const families = await query({
    query: `
      query {
        families {
            id
            name
            webname
            description
            image
          }
      }
    `,
  });
  res.statusCode = 200;
  res.json(families);
};
