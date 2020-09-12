const mongoClient = require('../services/mongoConnection.js');
const mongoDB = require('mongodb');
const Publication = require('../entities/publication.js');
const toJson = require('../utils/toJson.js');

class PublicationRepository{
    create({name, type}) {
        return mongoClient(async (err, dbo) => {
          if (err) {
            throw err
          }
    
          const publication = new Publication({
            name,
            type
          });
    
          await dbo.collection('publications').insertOne(toJson(publication));
    
          return publication
        })
      }
}
module.exports = new PublicationRepository();