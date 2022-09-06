import { INewUser } from './interfaces';
import UserRepository from './repository';

export default class UserBll {
  static async create(body: any) {
    const newUser: INewUser = body;
    await UserRepository.insertOne(newUser);
    return newUser;
  }
}
