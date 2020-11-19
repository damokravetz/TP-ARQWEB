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
        const normalizedQuery=this.normalizeQuery(query)
        const publications = await PublicationRepository.getAll(normalizedQuery);
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
        let myNewQuery={};
        if(query.district!=null){
            myNewQuery.district=query.district;
        }
        this.setQueryPriceRange(query, myNewQuery);
        return myNewQuery;
    }

    setQueryPriceRange(query, myNewQuery){
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
        myNewQuery.price=priceRange;
    }
}
module.exports = new PublicationService();