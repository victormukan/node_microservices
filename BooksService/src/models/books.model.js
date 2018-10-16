import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  author: { type: String, required: true },
  language: { type: String, required: true },
  description: { type: String, required: true },
  publishDate: { type: Date, required: true },
  numberOfPages: { type: Number, required: true, min: 0 },
  createDate: { type: Date, default: Date.now() },
  updateDate: { type: Date, default: Date.now() }
});

const booksModel = mongoose.model('Book', booksSchema);

export default booksModel;
