import * as Sequelize from 'sequelize';
import sequelize from '../config/sequelize';

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

export default User;
