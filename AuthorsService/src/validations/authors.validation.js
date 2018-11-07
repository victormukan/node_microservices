import { Joi } from 'celebrate';

const validateId = {
  params: {
    id: Joi.string().required()
  },
};

const createAuthor = {
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    books: Joi.array().items(Joi.string().required()).required(),
    dateOfBirth: Joi.date().required(),
    placeOfBirth: Joi.string().required()
  }
};

const updateAuthor = {
  params: {
    id: Joi.string().required()
  },
  body: {
    firstName: Joi.string(),
    lastName: Joi.string(),
    books: Joi.array().items(Joi.string()),
    dateOfBirth: Joi.date(),
    placeOfBirth: Joi.string()
  }
};

export default { validateId, createAuthor, updateAuthor };
