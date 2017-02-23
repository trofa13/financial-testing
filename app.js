const departments = require('./controllers/departments');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const Koa = require('koa');
const path = require('path');
const app = module.exports = new Koa();




// Serve static files
if(process.argv.indexOf('--dev') !== -1){
  app.use(serve(path.join(__dirname, 'front/dev')));
} else {
  app.use(serve(path.join(__dirname, 'front/prod')));
}

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(1333);
  console.log('listening on port 1333');
}