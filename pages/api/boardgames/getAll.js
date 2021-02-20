const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const boardgames = await query({
    query: `
      query {
        boardgames {
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
          }
      }
    `,
  });
  res.statusCode = 200;
  res.json(boardgames);
};
