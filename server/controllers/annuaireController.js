'use strict'

var db = require('../controllers/database');

var myCallback = function(err, data)
{
  console.log("CallBack");
  console.log(data);
  return (data);
};

exports.getAllContact = function(req, res)
{
  console.log("getAllContact");
  var data = db.select(myCallback);
  return (data);
}

exports.getContactById = function(req, res)
{
  console.log("getContactById");
  if (req.params.id)
  {
      var data = db.selectById(req.params.id, myCallback);
      return (data);
  }
  else
    return (res.send({"error": "undefined id"}));
}

exports.postContact = function(req, res)
{
  console.log("postContact");
  if (req.body)
  {
    db.insertInto(req.body);
    return res.send({'msg': 'Contact ajouter avec succès'});
  }
  else
      return res.send({'error': 'Impossible d\'ajouter un contact'});
}
