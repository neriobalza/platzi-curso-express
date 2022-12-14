import Joi from "joi";

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const idSchema = Joi.object({
  id: id.required(),
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updatePutProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updatePathProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

export {
  createProductSchema,
  updatePutProductSchema,
  updatePathProductSchema,
  idSchema,
};
