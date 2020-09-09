'use strict';
module.exports = (sequelize, DataTypes) => {
	var user = sequelize.define('user', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		firstName: {
		allowNull: false,
		type: DataTypes.STRING
		},
		lastName: {
		allowNull: false,
		type: DataTypes.STRING
		},
		state: {
		allowNull: false,
		type: DataTypes.STRING
		},
		email: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true
		},
		password: {
		allowNull: false,
		type: DataTypes.STRING
		},
		isAdmin: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
		defaultValue: false
		}
	});

	return user;
}