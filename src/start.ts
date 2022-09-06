import MongoClientFactory from './app/database';
import Server from './app/server';
import config from './config';

async function start() {
  const server = new Server();
  server.start();
  await MongoClientFactory.createAndConnectClient('template', config.database);
}

start();
