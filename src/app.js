import Koa from 'koa';
const app = new Koa();
import KoaLogger from 'koa-logger';


app.use(KoaLogger());
// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3001);