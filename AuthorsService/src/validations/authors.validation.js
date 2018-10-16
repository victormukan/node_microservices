import joi from 'joi';

const validateId = {
  params: {
    id: joi.string().required()
  },
};

const createAuthor = {
  body: {
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    books: joi.array().items(joi.string().required()).required(),
    dateOfBirth: joi.date().required(),
    placeOfBirth: joi.string().required()
  }
};

const updateAuthor = {
  params: {
    id: joi.string().required()
  },
  body: {
    firstName: joi.string(),
    lastName: joi.string(),
    books: joi.array().items(joi.string()),
    dateOfBirth: joi.date(),
    placeOfBirth: joi.string()
  }
};

export default { validateId, createAuthor, updateAuthor };
