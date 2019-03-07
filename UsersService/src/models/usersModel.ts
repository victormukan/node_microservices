import * as Sequelize from 'sequelize';
import sequelize from '../config/sequelize';
import Tasks from './tasksModel';

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING },
    dob: { type: Sequelize.DATE }
});

User.hasMany(Tasks);

sequelize.sync();

export default User;
