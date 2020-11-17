const Publication = require('../entities/publication.js');
const PublicationService = require('../services/publicationService.js');
class PublicationController {
  async create(req, res) {
    try {
      const mainAttributes = {
        street: req.body.street,
        number: req.body.number,
        district: req.body.district,
        cp: req.body.cp,
        type: req.body.type,
        apt: req.body.apt,
        rooms: req.body.rooms,
        brooms: req.body.brooms,
        price: req.body.price
      };

      const response = await PublicationService.create(mainAttributes);
      res.send(response)
    } catch (e) {
      //console.error(e);
      res.send({ created: false, message: e.details[0].message });
    }
  }

  async getAll(req, res) {
    const heroes = await PublicationService.getAll();
    res.send(heroes)
  }

  async get(req, res) {
    try {
      const id = req.params.id;
      const myPublication =  await PublicationService.get(id);
      res.send(myPublication)
    } catch (e) {
      //console.error(e);
      res.send({ message: 'Error' })
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const mainAttributes = {
        street: req.body.street,
        number: req.body.number,
        district: req.body.district,
        cp: req.body.cp,
        type: req.body.type,
        apt: req.body.apt,
        rooms: req.body.rooms,
        brooms: req.body.brooms,
        price: req.body.price
      };
      const response = await PublicationService.update(id, mainAttributes);
      res.send(response)
    } catch (e) {
      //console.error(e);
      res.send({ created: false, message: e.details[0].message });
    }
  }

  async delete(req, res) {
    try {
      await PublicationService.delete(req.params.id);
      res.send({ deleted: true })
    } catch (e) {
      //console.error(e);
      res.send({ message: 'Error' })
    }
  }
}
module.exports = new PublicationController();