import express from 'express';
import routes from './routes';
import { winstonLoggerMiddleware } from './middlewares/winstonLoggerMiddleware';

class App {
  constructor() {
    process.env.NODE_ENV = 'production';
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(winstonLoggerMiddleware)
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;