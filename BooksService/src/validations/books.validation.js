import { Joi } from 'celebrate';

const validateId = {
  params: {
    id: Joi.string().required()
  },
};

const createBook = {
  body: {
    name: Joi.string().required(),
    genre: Joi.string().required(),
    author: Joi.string().required(),
    language: Joi.string().required(),
    description: Joi.string().required(),
    publishDate: Joi.date().required(),
    numberOfPages: Joi.number().required()
  }
};

const updateBook = {
  params: {
    id: Joi.string().required()
  },
  body: {
    name: Joi.string(),
    genre: Joi.string(),
    author: Joi.string(),
    language: Joi.string(),
    description: Joi.string(),
    publishDate: Joi.string(),
    numberOfPages: Joi.number()
  }
};

export default { validateId, createBook, updateBook };
