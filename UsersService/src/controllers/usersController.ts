import * as Koa from 'koa';
import userModel from '../models/usersModel';

export default class UsersController {
    public static async getAllUsers(ctx: Koa.Context) {
        ctx.body = await userModel.findAll({ attributes: ['id', 'name', 'surname', 'dob'] });
    }

    public static async getUserById(ctx: Koa.Context) {
        ctx.body = await userModel.findAll({ 
            where: { id: ctx.params.id },
            attributes: ['id', 'name', 'surname', 'dob'] });
    }

    public static async createUser(ctx: Koa.Context) {
        const { name, surname, dob } = ctx.request.body;

        ctx.body = await userModel.create(
            { id: null, name, surname, dob }, 
            { fields: [ 'name', 'surname', 'dob' ] }
        );

        ctx.status = 201;
    }

    public static async updateUser(ctx: Koa.Context) {
        ctx.body = await userModel.update(ctx.request.body, {
            returning: true,
            where: { id: ctx.params.id }
        });
    } 
}