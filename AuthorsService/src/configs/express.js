import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { errors as errorsMiddleware } from 'celebrate';

import authorsRouter from '../routes/authors.route';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(helmet());


app.set('port', process.env.SERVER_PORT);

app.use('/', authorsRouter);

app.use(errorsMiddleware());
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
