import status from 'http-status';
import Book from '../models/books.model';

const createBook = (req, res) => {
  const book = new Book(req.body);

  book.save((err, data) => {
    if (err) {
      res.status(status.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.status(status.CREATED).send(`Book successfully created id = ${data._id}`);
    }
  });
};

const getAllBooks = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      res.status(status.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.status(status.OK).send(books);
    }
  });
};

const getBookById = (req, res) => {
  Book.findById(req.params.id, (err, books) => {
    if (err) {
      res.status(status.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.status(status.OK).send(books);
    }
  });
};

const updateBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, { $set: { ...req.body, updateDate: Date.now() } },
    (err) => {
      if (err) {
        res.status(status.INTERNAL_SERVER_ERROR).send(err);
      } else {
        res.status(status.OK).send('Book successfully updated');
      }
    });
};

const deleteBook = (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(status.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.status(status.OK).send('Book successfully deleted');
    }
  });
};

export default {
  createBook, getAllBooks, getBookById, updateBook, deleteBook
};
