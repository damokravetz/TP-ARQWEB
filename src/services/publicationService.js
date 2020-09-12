const Publication = require('../entities/publication.js');
const PublicationRepository = require('../repositories/publicationRepository.js');
class PublicationService{
    async create(publication) {
          const myPublication = await PublicationRepository.create(publication);
          return JSON.stringify({created: true, myPublication})
      }
}
module.exports = new PublicationService();