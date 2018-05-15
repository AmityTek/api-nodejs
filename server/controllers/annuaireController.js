'use strict'

var Database = require('better-sqlite3');
var db = new Database('annuaire.db');

// create database
db.exec('CREATE TABLE if not exists annuaire(id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, email TEXT, phone TEXT)');

exports.getAllContact = function(req, res)
{
  var data = db.prepare('SELECT * FROM annuaire').all();
  return (res.json(data));
}

exports.getContactById = function(req, res)
{
  var data = db.prepare('SELECT * FROM annuaire WHERE id=?').get(req.params.id);
  return (res.json(data));
}

exports.postContact = function(req, res)
{
  if (req.body)
  {
    var stmt = db.prepare('INSERT INTO annuaire VALUES (null, :firstname, :lastname, :email, :phone)');
    stmt.run(req.body);
    return res.send({'msg': 'Contact ajouter avec succès'});
  }
  else
      return res.send({'msg': 'Impossible d\'ajouter un contact'});
}
