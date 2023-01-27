
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const connection =async () => {
	try {
		console.log("environment var :" + process.env.MONGO_URL);
		const conn =  await mongoose.connect(process.env.MONGO_URL);
		console.log(`MONGODB Connected : ${conn.connection.host}`);
	} catch (error) {
		console.log(`unable to connect to database: ${error.message}`);
		process.exit(1);
	}
};
module.exports=connection;