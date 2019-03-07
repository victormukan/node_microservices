import * as validate from 'koa-joi-validate';
import * as Router from 'koa-router';
import TasksController from '../controllers/tasksController';
import UsersController from '../controllers/usersController';
import TasksValidation from '../validations/tasksValidation';
import UsersValidation from '../validations/usersValidation';

const router = new Router();

router.get('/users', UsersController.getAllUsers);

router.get('/users/:id', validate(UsersValidation.getById), UsersController.getUserById);

router.post('/users', validate(UsersValidation.createUser), UsersController.createUser);

router.put('/users/:id', validate(UsersValidation.updateUser), UsersController.updateUser);

router.post('/users/:userId/task/:taskId', validate(UsersValidation.addTask), UsersController.addTask);

router.get('/tasks', TasksController.getAll);

router.post('/tasks', validate(TasksValidation.createTask), TasksController.createTask);

export default router;
