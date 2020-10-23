const Publication = require('../entities/publication.js');
const PublicationRepository = require('../repositories/publicationRepository.js');
class PublicationService {
    async create(publication) {
        const myPublication = await PublicationRepository.create(publication);
        return JSON.stringify({ created: true, myPublication })
    }
    async get(id) {
        const myPublication = await PublicationRepository.get(id);
        return JSON.stringify(myPublication);
    }
    async update(id, data) {
        const myPublication = await PublicationRepository.update(id, data);
        return JSON.stringify(myPublication);
    }
    async delete(id) {
        await PublicationRepository.delete(id);
        return true;
    }
}
module.exports = new PublicationService();