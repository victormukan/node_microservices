import { Router } from 'express';
import { celebrate as validator } from 'celebrate';
import controller from '../controllers/books.controller';
import validations from '../validations/books.validation';

const router = new Router();

router.route('/')
  .get(controller.getAllBooks)
  .post(validator(validations.createBook), controller.createBook);

router.route('/:id')
  .get(validator(validations.validateId), controller.getBookById)
  .put(validator(validations.updateBook), controller.updateBook)
  .delete(validator(validations.validateId), controller.deleteBook);

export default router;
