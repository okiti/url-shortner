import Joi from 'joi';

export const encode = Joi.object({
  url: Joi.string().required(),
});

export const decode = Joi.object({
  alias: Joi.string().required(),
});
