import * as Koa from 'koa';
import tasksModel from '../models/tasksModel';

export default class TasksController {
    public static async getAll(ctx: Koa.Context) {
        ctx.body = await tasksModel.findAll();
    }

    public static async createTask(ctx: Koa.Context) {
        const { name, code } = ctx.request.body;

        ctx.body = await tasksModel.create({ name, code });

        ctx.status = 201;
    }
}
