import mongoose from 'mongoose';

const authorsSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  books: { type: [String], required: true },
  dateOfBirth: { type: Date, required: true },
  placeOfBirth: { type: String, required: true }
});

const authorsModel = mongoose.model('Author', authorsSchema);

export default authorsModel;
