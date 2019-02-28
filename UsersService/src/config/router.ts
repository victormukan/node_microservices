import * as Router from 'koa-router';
import * as validate from 'koa-joi-validate';
import UsersController from '../controllers/usersController';
import UsersValidation from '../validations/usersValidation';

const router = new Router();

router.get('/', UsersController.getAllUsers);

router.get('/:id', validate(UsersValidation.getById), UsersController.getUserById);

router.post('/', validate(UsersValidation.createUser), UsersController.createUser);

router.put('/', async ctx => {

})

export default router;