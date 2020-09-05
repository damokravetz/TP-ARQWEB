const dbConnectionString = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017';

module.exports = {
  db: {
    host: dbConnectionString,
    name: 'heroesRPG'
  }
};