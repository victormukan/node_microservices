import * as Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

const Tasks = sequelize.define('tasks', {
    name: {
        type: Sequelize.STRING
    },
    code: {
        type: Sequelize.STRING
    }
});

Tasks.sync();

// Tasks.bulkCreate([
//     { name: 'foo', code: '123' },
//     { name: 'code', code: '1234' },
//     { name: 'bar', code: '1' }
// ]);

export default Tasks;
