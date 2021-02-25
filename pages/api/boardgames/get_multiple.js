const { query } = require("./../../../utils/hasura");

export default async (req, res) => {
  const { ids } = req.body;

  const { boardgames } = await query({
    query: `
      query {
        boardgames(where: {id: {_in: [${ids}]}}) {
            id
            image
            webname
            numberOfPlayersNotRecommended
            numberOfPlayersBest
            year
            age
            average
            numVotes
            PVP
            price
            stock
            active
            numberOfPlayers
            playTimeMin
            playTimeMax
            weight
            imageDefault
        }
      }
    `,
  });
  res.statusCode = 200;
  res.json(boardgames);
};
