const { Schema, model } = require('mongoose');

const schema = new Schema(
	{
		nombre: String,
		apellido: String,
		dni: String,
		photo: String
	},
	{
		collection: 'users',
		timestamps: true,
		versionKey: false
	}
);

module.exports = model('User', schema);
