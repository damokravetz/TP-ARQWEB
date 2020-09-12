module.exports = (app) => {
    const publications = require('../controllers/publicationController.js');

    // Create a new Note
    app.post('/publications', publications.create);

    // Retrieve all Notes
    /*app.get('/publications', publications.findAll);

    // Retrieve a single Note with noteId
    app.get('/publications/:id', publications.findOne);

    // Update a Note with noteId
    app.put('/publications/:id', publications.update);

    // Delete a Note with noteId
    app.delete('/publications/:id', publications.delete);*/
}