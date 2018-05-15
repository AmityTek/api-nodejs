'use strict'
//handle connexion db
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:', (err) =>
{
  if (err)
    return console.error(err.message);
  db.run('CREATE TABLE if not exists annuaire(id INTEGER primary key, firstname text, lastname text, email text, phone text)');
  console.log('Connected DB');
});

// function which is used to select all data from db
exports.select = function (myCallback)
{
  var responseData = [];
  var idx = 0;

  db.all("SELECT * FROM annuaire", function(err, rows)
  {
    rows.forEach(function(row)
    {
      responseData[idx] = [];
      responseData[idx]['id'] = row.id;
      responseData[idx]['fistname'] = row.firstname;
      responseData[idx]['lastname'] = row.lastname;
      responseData[idx]['phone'] = row.phone;
      responseData[idx]['email'] = row.email;
      idx++;
    });
    return myCallback(null, responseData);
  });

}

// function which is used to select data thanks to id from db
exports.selectById = function (id, myCallback)
{
  var responseData = [];

  db.all("SELECT * FROM annuaire where id = " + id, function(err, rows)
  {
    if (rows[0])
    {
      responseData['id'] = rows[0].id;
      responseData['fistname'] = rows[0].firstname;
      responseData['lastname'] = rows[0].lastname;
      responseData['phone'] = rows[0].phone;
      responseData['email'] = rows[0].email;
      return myCallback(null, responseData);
    }
  });
}

// function which is used to insert data into db
exports.insertInto = function (data)
{
  var err, row;
  var arrayData = [data['firstname'], data['lastname'], data['email'], data['phone']];
  db.run(`INSERT INTO annuaire(firstname, lastname, email, phone) VALUES(?, ?, ?, ?)`, arrayData, function(err, row)
  {
    if (err)
      return console.log("Error : " + err.message);
  });
}
