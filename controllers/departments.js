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
  // TODO: validate request
  return Department.findOrCreate({ where: ctx.request.body })
  .then(department => {
    ctx.body = department;
    resolve();
  })
  .catch(e => reject({ status: 500, data: { message: 'DBError' } }));
});

module.exports.edit = (ctx, id, next) => new Promise((resolve, reject) => {
  if ('POST' != ctx.method) return next;
  // TODO: validate request
  Department.findById(id)
  .then(department => {
    if(!department) return reject({ 
      status: 404, 
      data: { message: 'No matching department found!' } 
    });
    return department.update({
      name: ctx.request.body.name
    }).then(dep => {
      ctx.body = dep;
      resolve();
    })
  })
  .catch(e => reject({ status: 500, data: { message: 'DBError' } }));;
});

module.exports.delete = (ctx, id, next) => new Promise((resolve, reject) => {
  if ('DELETE' != ctx.method) return next;
  // TODO: validate request
  Department.findById(id)
  .then(department => {
    if(!department) return reject({ 
      status: 404, 
      data: { message: 'No matching department found!' } 
    });
    department.destroy().then(() => {
      ctx.body = { success: true };
      resolve();
    })
  })
  .catch(e => reject({ status: 500, data: { message: 'DBError' } }));
});