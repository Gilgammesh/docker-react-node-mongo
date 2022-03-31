const User = require('../models/user');

exports.getAll = async (req, res) => {
	try {
		const users = await User.find().sort({ nombre: 'asc' });
		res.json({
			status: true,
			users
		});
	} catch (error) {
		console.log(error);
	}
};
exports.get = async (req, res) => {
	const { params } = req;
	const { id } = params;
	try {
		const user = await User.findById(id);
		res.json({
			status: true,
			user
		});
	} catch (error) {
		console.log(error);
	}
};
exports.create = async (req, res) => {
	const { body } = req;
	try {
		const newUser = new User(body);
		await newUser.save();
		res.json({
			status: true,
			msg: 'se creó el usuario'
		});
	} catch (error) {
		console.log(error);
	}
};
exports.update = async (req, res) => {
	const { params, body } = req;
	const { id } = params;
	try {
		await User.findByIdAndUpdate(id, body, { new: true });
		res.json({
			status: true,
			msg: 'se actualizó el usuario'
		});
	} catch (error) {
		console.log(error);
	}
};
exports.delete = async (req, res) => {
	const { params } = req;
	const { id } = params;
	try {
		await User.findByIdAndDelete(id);
		res.json({
			status: true,
			msg: 'se eliminó el usuario'
		});
	} catch (error) {
		console.log(error);
	}
};
