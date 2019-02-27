import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as compress from 'koa-compress';
import * as koaLogger from 'koa-logger';
import * as convert from 'koa-convert';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as helmet from 'koa-helmet';
import * as cors from 'koa-cors';

import userRouter from './config/router';
import './config/sequelize';


const app = new Koa();
const router = new Router();

router.use('/user', userRouter.routes());

app.use(helmet());
app.use(convert(cors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    headers: 'Content-Type, Authorization'
})));
app.use(bodyParser());
app.use(compress());
app.use(json({ pretty: false, param: 'pretty' }));
app.use(koaLogger());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log('Server running on port 3000');