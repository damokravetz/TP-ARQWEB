module.exports = (app) => {
    const publications = require('../controllers/publicationController.js');

    app.post('/publications', publications.create);
    app.get('/publications/:id', publications.get);
    app.get('/publications', publications.getAll);
    app.put('/publications/:id', publications.update);
    app.delete('/publications/:id', publications.delete);
}