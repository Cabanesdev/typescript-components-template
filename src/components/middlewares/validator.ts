import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IValidator } from '../../utils/interfaces';

async function validateScheme(property: any, scheme: any) {
  if (property) {
    const schemeValidator = Joi.object(scheme);
    const { error } = await schemeValidator.validateAsync(property);
    if (error) throw new Error(error.details[0].message);
  }
}

function validator(scheme: IValidator) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { query, params, body } = req;

      await validateScheme(query, scheme.query);
      await validateScheme(params, scheme.params);
      await validateScheme(body, scheme.body);

      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

export default validator;
