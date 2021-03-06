import * as Koa from 'koa';
import tasksModel from '../models/tasksModel';
import usersModel from '../models/usersModel';

export default class UsersController {
    public static async getAllUsers(ctx: Koa.Context) {
        ctx.body = await usersModel.findAll({
            attributes: ['id', 'name', 'surname', 'dob'],
            order: [['name', 'desc'], ['id', 'desc']]
        });
    }

    public static async getUserById(ctx: Koa.Context) {
        ctx.body = await usersModel.findAll({
            where: { id: ctx.params.id },
            attributes: ['id', 'name', 'surname', 'dob']
        });
    }

    public static async createUser(ctx: Koa.Context) {
        const { name, surname, dob } = ctx.request.body;

        ctx.body = await usersModel.create(
            { id: null, name, surname, dob },
            { fields: ['name', 'surname', 'dob'] }
        );

        ctx.status = 201;
    }

    public static async updateUser(ctx: Koa.Context) {
        // ctx.body = await usersModel.update(ctx.request.body, {
        //     returning: true,
        //     where: { id: ctx.params.id }
        // });

        const user: any = await usersModel.findOne({ where: { id: ctx.params.id } });

        user.name = 'Vic';

        user.save();

        ctx.body = user;
        // user.save();
        console.log(user);
    }

    public static async addTask(ctx: Koa.Context) {
        const task = await tasksModel.findByPk(ctx.params.taskId);
        const user: any = await usersModel.findByPk(ctx.params.userId);

        console.log(user);

        ctx.body = user.setTask(task);
        console.log(task);

    }
}
