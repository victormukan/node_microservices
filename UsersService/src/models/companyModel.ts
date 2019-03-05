import * as Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Tasks = sequelize.define('task', {
    name: {
        type: Sequelize.STRING,
        validate: {
            notNull: { args: true, msg: 'name cannot be null' }
        }
    },
    code: {
        type: Sequelize.STRING,
        validate: {
            len: [3, 10]
        }
    }
});

Tasks.bulkCreate([
    { name: 'foo', code: '123' },
    { name: 'code', code: '1234' },
    { name: 'bar', code: '1' }
]);

export default Tasks;
