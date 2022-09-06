import MongoClientFactory from '../../app/database';
import { INewUser } from './interfaces';

const COLLECTION = 'user';

export default class UserRepository {
  static async insertOne(newUser: INewUser) {
    const collection = MongoClientFactory.getClient('template').db().collection(COLLECTION);
    await collection.insertOne(newUser);
  }
}
