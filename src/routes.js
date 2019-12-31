import { Router } from 'express';

import UserController from './app/Controller/UserController'


const routes = new Router();

routes.post('/', UserController.store)

export default routes;