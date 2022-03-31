const mongoose = require('mongoose');

exports.connection = async () => {
	const url = process.env.MONGO_URL || 'localhost';
	const URI = `mongodb://${url}:27017/docker`;

	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};

	// Nos conectamos a la base de datos
	mongoose.connect(URI, options, err => {
		if (err) {
			console.log(err);
		}
		console.log(`Conectado a mongo`);
	});
};
