import joi from 'joi';

const validateId = {
  params: {
    id: joi.string().required()
  },
};

const createBook = {
  body: {
    name: joi.string().required(),
    genre: joi.string().required(),
    author: joi.string().required(),
    language: joi.string().required(),
    description: joi.string().required(),
    publishDate: joi.string().required(),
    numberOfPages: joi.number().required()
  }
};

const updateBook = {
  params: {
    id: joi.string().required()
  },
  body: {
    name: joi.string(),
    genre: joi.string(),
    author: joi.string(),
    language: joi.string(),
    description: joi.string(),
    publishDate: joi.string(),
    numberOfPages: joi.number()
  }
};

export default { validateId, createBook, updateBook };
