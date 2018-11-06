import status from 'http-status';
import Author from '../models/authors.model';

const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    const data = await author.save();

    res.status(status.CREATED).send(`Author successfully created id = ${data._id}`);
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});
    res.send(authors);
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.send(author);
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

const updateAuthor = async (req, res) => {
  try {
    await Author.findByIdAndUpdate(req.params.id, {
      $set: { ...req.body, updateDate: Date.now() }
    });
    res.send('Author successfully updated');
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

const deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndRemove(req.params.id);
    res.send('Author successfully deleted');
  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).send(err);
  }
};

export default {
  createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor
};
