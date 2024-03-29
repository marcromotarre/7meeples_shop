const { query } = require("../../../utils/hasura");

export default async (req, res) => {
  const boardgames = await query({
    query: `
      query {
        boardgames {
            id
            description
            image
            images
            webname
            numberOfPlayersNotRecommended
            numberOfPlayersBest
            year
            age
            average
            numVotes
            PVP
            weight
            price
            stock
            active
            numberOfPlayers
            playTimeMin
            playTimeMax
            imageDefault
            designers
            categories
            expansions
            expansionOf
            mechechanisms
            families
            content
            publishers
          }
      }
    `,
  });
  res.statusCode = 200;
  res.json(boardgames);
};
