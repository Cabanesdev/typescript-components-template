/* eslint-disable import/prefer-default-export */
import Joi from 'joi';
import { IValidator } from '../../utils/interfaces';

export const createUser: IValidator = {
  body: {
    name: Joi.string().required(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    repeatedPassword: Joi.string().required(),
  },
};
