const Department = require('../models/department');

module.exports.all = (ctx, next) => new Promise((resolve, reject) => {
  if ('GET' != ctx.method) return next;
  Department.findAll().then(departments => {
    ctx.body = departments;
    resolve();
  });
});

module.exports.add = (ctx, next) => new Promise((resolve, reject) => {
  if ('POST' != ctx.method) return next;
  Department.findOrCreate({ where: { name: 'Uno' } }).then(department => {
    ctx.body = department;
    resolve();
  });
});

module.exports.edit = (ctx, id, next) => new Promise((resolve, reject) => {
  if ('POST' != ctx.method) return next;
  // TODO: validate request
  Department.findById(id).then(department => {
    if(!department) return reject({ 
      status: 404, 
      data: { message: 'No matching department found!' } 
    });
    department.update({
      name: ctx.request.body.name
    }).then(dep => {
      ctx.body = dep;
      resolve();
    })
  });
});

module.exports.delete = (ctx, id, next) => new Promise((resolve, reject) => {
  if ('DELETE' != ctx.method) return next;
  Department.findById(id).then(department => {
    if(!department) return reject({ 
      status: 404, 
      data: { message: 'No matching department found!' } 
    });
    department.destroy().then(() => {
      ctx.body = { success: true };
      resolve();
    })
  });
});