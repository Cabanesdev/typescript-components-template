/* eslint-disable max-len */
import { MongoClient } from 'mongodb';
import { MongoConfig } from '../../utils/types';

export default class MongoClientFactory {
  private static clients = new Map<String, MongoClient>();

  static getClient(contextName: string): MongoClient {
    return this.clients.get(contextName);
  }

  static async createAndConnectClient(contextName: string, config: MongoConfig): Promise<MongoClient> {
    const client = new MongoClient(config.url, { ignoreUndefined: true });
    await client.connect();
    console.log('Client created and Connected Successfully');

    this.registerClient(contextName, client);

    return client;
  }

  private static registerClient(contextName: string, client: MongoClient): void {
    this.clients.set(contextName, client);
  }
}
