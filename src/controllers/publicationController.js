const Publication = require('../entities/publication.js');
const PublicationService = require('../services/publicationService.js');
class PublicationController{
    create(req, res) {
        try {
          const mainAttributes = {
            type: req.body.type,
            name: req.body.name
          };
    
          const response = PublicationService.create(mainAttributes);
          res.send(response)
        } catch (e) {
          //console.error(e);
          res.send({created: false, message: e.details[0].message});       
        }
      }
}
module.exports = new PublicationController();