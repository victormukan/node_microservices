import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import validator from 'express-validation';

import booksRouter from '../routes/books.route';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(helmet());

app.set('port', process.env.SERVER_PORT);


app.use('/', booksRouter);


app.use((err, req, res, next) => {
  if (err instanceof validator.ValidationError) {
    res.status(err.status).json(err);
  } else {
    next();
  }
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
