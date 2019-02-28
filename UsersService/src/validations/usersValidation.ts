import * as joi from 'joi';

export default class UsersValidation {
    public static getById = {
        params: {
            id: joi.number().required()
        }
    }

    public static createUser = {
        body: {
            name: joi.string().max(200).required(),
            surname: joi.string().max(200).required(),
            dob: joi.date().required()
        }
    }
}
