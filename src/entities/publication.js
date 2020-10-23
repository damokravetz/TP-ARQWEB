class Publication {
    constructor({street, number, district, cp, type, apt, rooms, brooms, price}) {
      this.street= street;
      this.number= number;
      this.district= district;
      this.cp= cp;
      this.type = type;
      this.apt= apt;
      this.rooms= rooms;
      this.brooms= brooms;
      this.price= price;
    }
  }
  
  module.exports = Publication;