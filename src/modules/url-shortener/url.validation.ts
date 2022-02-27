import Joi from 'joi';

export const encode = Joi.object({
  url: Joi.string().required(),
});
