/*

Ici c'est le point d'entrée du serveur, je te conseille de faire d'autres fichiers/dossiers pour l'api

Il faut que tu démarre un serveur express sur le port 8080 (c'est important pour le front)

Tu peux voir dans le package.json pour le script start on utilise nodemon donc tes changements sont instantanément appliqués, pas besoin de relancer le serveur

Le front est une application qui tourne sur le port 3000 et le serveur sur le port 8080,
du coup pour ton navigateur c'est deux apps différentes donc tu auras forcement des problèmes de cors (Cross-origin resource sharing) à un moment
pour régler le soucis il faudra que tu fasses un middleware express et que tu regardes du cote de la méthode "setHeader"

Pour l'api il faut 3 routes:
-  /entries/all en GET qui retourne la liste des entrées de l'annuaire
-  /entry/[ID] en GET qui retourne une entrée specifique
-  /entry en POST pour créer une nouvelle entrée et retourne un json de la forme { msg: 'message de création réussie ou d'échec avec la raison' }

Pour l'anuaire tu es libre de faire comme tu veux, pour le moment le plus simple est surement de le faire in-memory
let entries = [
  { id: 1, firstname: 'Thibs', lastname: 'Le Francais', email: 'bgdenancy@gmail.com', phone: '+33678901234'},
  { id: 2, firstname: 'Jean', lastname: 'Michel', email: 'jeanmi@gmail.com', phone: '+33678901234'}
];

Mais si tu veux tu peux aussi faire une db genre sqlLite ou encore un fichier csv.

Normalement si tu respectes bien tout tu ne devrais pas avoir à toucher au client/front mais il est possible que tu fasses aussi différement de moi
donc si tu dois le modifier un peu c'est pas un problème je t'ai laissé les sources pour ça

 */

var express = require('express'), app = express(), port = process.env.PORT || 8080;
var cors = require('cors') // importing cors
var bodyParser = require('body-parser') // importing parsing
let routes = require('./routes/route'); //importing route

app.use(bodyParser.urlencoded({ extended: true})); // allow parsing json
app.use(bodyParser.json()); // allow parsing json

app.use(function (req, res, next) // app.use() here is used to setHeader to allow api
 {
    cors();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers',  'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
routes(app); //register the route in app
app.listen(port); // listen app on port

console.log('server star: ' + port);
