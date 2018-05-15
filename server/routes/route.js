'use strict';

var annuaire = require('../controllers/annuaireController');

module.exports = function(app)
{
  // Annuaire Routes
  app.route('/').get(annuaire.getAllContact)
  app.route('/entries/all').get(annuaire.getAllContact)
  app.route('/entry/:id').get(annuaire.getContactById)
  app.route('/entry').post(annuaire.postContact);
};
