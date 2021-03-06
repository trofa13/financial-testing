const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const Koa = require('koa');
const path = require('path');
const app = module.exports = new Koa();

const departments = require('./controllers/departments');
const employees = require('./controllers/employees');

app.use(bodyParser());
app.use((ctx, next) => {
  return next().catch(e => {
      ctx.status = e.status;
      ctx.body = e.data;
  });
});

app.use(route.get('/api/departments', departments.all));
app.use(route.post('/api/departments', departments.add));
app.use(route.post('/api/departments/:id', departments.edit));
app.use(route.delete('/api/departments/:id', departments.delete));

app.use(route.get('/api/employees', employees.all));
app.use(route.post('/api/employees', employees.add));
app.use(route.post('/api/employees/:id', employees.edit));
app.use(route.delete('/api/employees/:id', employees.delete));

// Serve static files
if(process.argv.indexOf('--dev') !== -1){
  console.log('Running in DEV mode');
  app.use(serve(path.join(__dirname, 'front/dev')));
  app.use(logger());
} else {
  app.use(serve(path.join(__dirname, 'front/prod')));
  // Compress
  app.use(compress());
}

if (!module.parent) {
  app.listen(1333);
  console.log('Listening on port :1333');
}