'use strict';

const Koa = require('koa');
const KoaLogger = require('koa-logger');
const app = new Koa();


app.use(KoaLogger());
// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3001);