import 'dotenv/config';
import express from 'express';
import proxy from 'http-proxy-middleware';

const app = express();

app.use('/books', proxy({
  target: process.env.BOOKS_SERVICE,
  changeOrigin: true,
  pathRewrite: {
    '^/books': '/'
  }
}));

app.use('/authors', proxy({
  target: process.env.AUTHORS_SERVICE,
  changeOrigin: true,
  pathRewrite: {
    '^/authors': '/'
  },
}));

app.set('port', process.env.SERVER_PORT);

app.listen(app.get('port'), () => {
  console.log('Proxy node app is running on port', app.get('port'));
});
