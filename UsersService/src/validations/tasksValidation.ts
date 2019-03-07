import * as joi from 'joi';

export default class TasksValidation {

    public static createTask = {
        body: {
            name: joi.string().max(200).required(),
            code: joi.string().max(200).required()
        }
    };

}
