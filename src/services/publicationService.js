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
    async getAll(query) {
        this.normalizeQuery(query)
        const publications = await PublicationRepository.getAll(query);
        return JSON.stringify(publications)
    }
    async update(id, data) {
        const myPublication = await PublicationRepository.update(id, data);
        return JSON.stringify(myPublication);
    }
    async delete(id) {
        await PublicationRepository.delete(id);
        return true;
    }

    normalizeQuery(query){
        if(query.rooms!=null){
            let rooms=parseInt(query.rooms);
            query.rooms=rooms;
        }
        if(query.brooms!=null){
            let brooms=parseInt(query.brooms);
            query.brooms=brooms;
        }
        if(query.number!=null){
            let number=parseInt(query.number);
            query.number=number;
        }
        this.setQueryPriceRange(query);
        console.log(query)
    }
    
    setQueryPriceRange(query){
        let priceRange={$lt:0, $gt:0};
        if(query.maxPrice!=null){
            let maxPrice=parseInt(query.maxPrice)
            delete query.maxPrice;
            priceRange.$lt=maxPrice;
        }else{
            delete priceRange.$lt;
        }
        if(query.minPrice!=null){
            let minPrice=parseInt(query.minPrice)
            delete query.minPrice;
            priceRange.$gt=minPrice;
        }else{
            delete priceRange.$gt;
        }
        query.price=priceRange;
    }
}
module.exports = new PublicationService();