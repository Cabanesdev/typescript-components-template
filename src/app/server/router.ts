import express from 'express';
import UserRouter from '../../components/user/router';

export default class Router {
  readonly router: express.Router;

  private readonly routers: Map<string, express.Router>;

  constructor() {
    this.router = express.Router();
    this.routers = new Map();
    this.registerRouters();
    this.declareRoutes();
  }

  private registerRouters() {
    this.routers.set('user', new UserRouter().router);
  }

  private declareRoutes() {
    this.router.use('/user', this.routers.get('user'));
  }
}
