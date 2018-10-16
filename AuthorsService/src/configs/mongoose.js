import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
