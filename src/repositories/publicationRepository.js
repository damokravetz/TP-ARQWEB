const mongoClient = require('../services/mongoConnection.js');
const mongoDB = require('mongodb');
const Publication = require('../entities/publication.js');
const toJson = require('../utils/toJson.js');

class PublicationRepository {
  create({ street, number, district, cp, type, apt, rooms, brooms, price }) {
    return mongoClient(async (err, dbo) => {
      if (err) {
        throw err
      }
      const publication = new Publication({
        street,
        number,
        district,
        cp,
        type,
        apt,
        rooms,
        brooms,
        price
      });
      await dbo.collection('publications').insertOne(toJson(publication));
      return publication
    })
  }

  get(id) {
    return mongoClient(async (err, dbo) => {
      if (err) {
        throw err
      }
      let mivar= await dbo.collection('publications').findOne({ _id: new mongoDB.ObjectID(id) })
      return mivar;
    });
  }

  update(id, data) {
    return mongoClient(async (err, dbo) => {
      if (err) {
        throw err
      }
      return await dbo.collection('publications').updateOne({ _id: new mongoDB.ObjectID(id) }, { $set: { ...data } })
    })
  }

  delete(id) {
    return mongoClient(async(err, dbo) => {
      if (err) {
        throw err
      }
      await dbo.collection('publications').deleteOne({ _id: new mongoDB.ObjectID(id) })
    })
  }
}
module.exports = new PublicationRepository();