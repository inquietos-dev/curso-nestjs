const Koa = require('koa');
const redis = require('redis');

const app = new Koa();
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

app.use(async (ctx) => {
  ctx.body = client.server_info.redis_version;
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening in port ${process.env.PORT}`);
});

client.on("error", function(error) {
  console.error(error);
  process.exit(1);
});


