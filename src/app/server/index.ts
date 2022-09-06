import bodyParser from 'body-parser';
import express from 'express';

import Router from './router';
import config from '../../config';

export default class Server {
  private app: express.Application;

  private router: express.Router;

  readonly corsOptions = { origin: '*' };

  constructor() {
    this.app = express();
    this.router = new Router().router;
    this.config();
  }

  private config(): void {
    this.app.set('port', config.server.port);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(this.router);
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => console.log(`Server listening in port ${this.app.get('port')}`));
  }
}
