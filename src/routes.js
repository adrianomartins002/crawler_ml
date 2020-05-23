import { Router } from 'express';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.post('/index', ProductController.index);

export default routes;