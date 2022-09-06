import { Request, Response } from 'express';
import UserBll from './bll';

export default class UserController {
  static async create(req: Request, res: Response) {
    try {
      const { body } = req;
      const newUser = await UserBll.create(body);
      res.status(200).json({ newUser });
    } catch (e) {
      console.log('Error', e);
    }
  }
}
