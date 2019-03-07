import * as joi from 'joi';

export default class UsersValidation {
    public static getById = {
        params: {
            id: joi.number().required()
        }
    };

    public static createUser = {
        body: {
            name: joi.string().max(200).required(),
            surname: joi.string().max(200).required(),
            dob: joi.date().required()
        }
    };

    public static updateUser = {
        params: {
            id: joi.number().required()
        },
        body: {
            name: joi.string().max(200),
            surname: joi.string().max(200),
            dob: joi.date()
        }
    };
    public static addTask = {
        params: {
            userId: joi.number().required(),
            taskId: joi.number().required()
        }
    };
}
