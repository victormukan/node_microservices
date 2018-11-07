import { Router } from 'express';
import { celebrate as validator } from 'celebrate';
import controller from '../controllers/authors.controller';
import validations from '../validations/authors.validation';

const router = new Router();

router.route('/')
  .get(controller.getAllAuthors)
  .post(validator(validations.createAuthor), controller.createAuthor);

router.route('/:id')
  .get(validator(validations.validateId), controller.getAuthorById)
  .put(validator(validations.updateAuthor), controller.updateAuthor)
  .delete(validator(validations.validateId), controller.deleteAuthor);

export default router;
