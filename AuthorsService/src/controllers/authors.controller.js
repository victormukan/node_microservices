import status from 'http-status';
import Author from '../models/authors.model';

const createAuthor = (req, res) => {
  const author = new Author(req.body);

  author.save((err, data) => {
    if (err) {
      res.status(status.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.status(status.CREATED).send(`Author successfully created id = ${data._id}`);
    }
  });
};

const getAllAuthors = (req, res) => {
  Author.find({}, (err, authors) => {
    if (err) {
      res.status(status.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.status(status.OK).send(authors);
    }
  });
};

const getAuthorById = (req, res) => {
  Author.findById(req.params.id, (err, author) => {
    if (err) {
      res.status(status.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.status(status.OK).send(author);
    }
  });
};

const updateAuthor = (req, res) => {
  Author.findByIdAndUpdate(req.params.id, { $set: { ...req.body, updateDate: Date.now() } },
    (err) => {
      if (err) {
        res.status(status.INTERNAL_SERVER_ERROR).send(err);
      } else {
        res.status(status.OK).send('Author successfully updated');
      }
    });
};

const deleteAuthor = (req, res) => {
  Author.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(status.INTERNAL_SERVER_ERROR).send(err);
    } else {
      res.status(status.OK).send('Author successfully deleted');
    }
  });
};

export default {
  createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor
};
