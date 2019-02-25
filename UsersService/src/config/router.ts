import * as Router from 'koa-router';

const router = new Router();

router.get('/:name', async ctx => {
    ctx.body = ctx.params;
});

router.post('/', async ctx => {
    console.log(ctx.header.authorization);
    ctx.body = ctx.request.body;
    ctx.status = 201;
});

router.put('/', async ctx => {

})

export default router;