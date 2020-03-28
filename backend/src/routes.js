const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes  = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.Create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;


    /** 
 * rota/ recurso 
 * 
 * 
 * métodos http
 * GET: buscar uma informação no back-end
 * POST:criar uma informação no back-end
 * PUT :alterar uma informação no back-end
 * DELETE :deletar uma informação no back-end
 */
/**tipos de parametros:
 * Query params:  parametros nomeados enviados na  rota após o sinbolo '?' que serve para :(filtros, paginação) 
 * Route paarams:  parametros para identificar recursos 
 * REQUEST body : é o corpo da requisição ultilizado para criar o alterar recursos */ 