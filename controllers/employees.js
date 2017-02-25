const Employee = require('../models/employee');

module.exports.all = (ctx, next) => new Promise((resolve, reject) => {
  if ('GET' != ctx.method) return next;
  Employee.findAll().then(employees => {
    ctx.body = employees;
    resolve();
  });
});

module.exports.add = (ctx, next) => new Promise((resolve, reject) => {
  if ('POST' != ctx.method) return next;
  // TODO: validate request
  Employee.findOrCreate({ where: ctx.request.body })
  .then(employee => {
    ctx.body = employee;
    resolve();
  })
  .catch(e => reject({ status: 500, data: { message: 'DBError' } }));;
});

module.exports.edit = (ctx, id, next) => new Promise((resolve, reject) => {
  if ('POST' != ctx.method) return next;
  // TODO: validate request
  Employee.findById(id)
  .then(employee => {
    if(!employee) return reject({ 
      status: 404, 
      data: { message: 'No matching employee found!' } 
    });
    employee.update(ctx.request.body)
    .then(empl => {
      ctx.body = empl;
      resolve();
    })
  })
  .catch(e => reject({ status: 500, data: { message: 'DBError' } }));;
});

module.exports.delete = (ctx, id, next) => new Promise((resolve, reject) => {
  if ('DELETE' != ctx.method) return next;
  // TODO: validate request  
  Employee.findById(id)
  .then(employee => {
    if(!employee) return reject({ 
      status: 404, 
      data: { message: 'No matching employee found!' } 
    });
    employee.destroy().then(() => {
      ctx.body = { success: true };
      resolve();
    })
  })
  .catch(e => reject({ status: 500, data: { message: 'DBError' } }));
});