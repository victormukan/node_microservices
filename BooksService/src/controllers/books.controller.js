import status from 'http-status';
import Book from '../models/books.model';

const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const data = await book.save();

    res.status(status.CREATED).send(`Book successfully created id = ${data._id}`);
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.send(book);
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

const updateBook = async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, {
      $set: { ...req.body, updateDate: Date.now() }
    });
    res.send('Book successfully updated');
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndRemove(req.params.id);
    res.status(status.OK).send('Book successfully deleted');
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

export default {
  createBook, getAllBooks, getBookById, updateBook, deleteBook
};
