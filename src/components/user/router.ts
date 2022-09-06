import express from 'express';
import validator from '../middlewares/validator';
import UserController from './controller';
import { createUser } from './validator';

export default class UserRouter {
  public readonly router: express.Router;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.post('/', validator(createUser), UserController.create);
  }
}
