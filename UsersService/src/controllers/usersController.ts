import sequelize from '../config/sequelize';
import * as Sequelize from 'sequelize';
import userModel from '../models/usersModel';

export default class UsersController {
    public static async getAllUsers(ctx) {
        ctx.body = await userModel.findAll({ attributes: ['id', 'name', 'surname', 'dob'] });
    }

    public static async getUserById(ctx) {
        ctx.body = await userModel.findAll({ 
            where: { id: ctx.params.id },
            attributes: ['id', 'name', 'surname', 'dob'] });
    }

    public static async createUser(ctx) {
        const { name, surname, dob } = ctx.request.body;

        ctx.body = await userModel.create(
            { id: null, name, surname, dob }, 
            { fields: [ 'name', 'surname', 'dob' ] }
        );

        ctx.status = 201;
    } 
}