const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getAll,
  getOne,
  updateOne,
  addNew,
  deleteOne
}

function getAll (testDb) {
  const db = testDb || knex
  return db('shoes').select()
}

function getOne (id, testDb) {
  const db = testDb || knex
  return db('shoes')
    .where('id', id).select()
}

function updateOne (post, testDb) {
  const db = testDb || knex
  return db('shoes')
    .where('id', post.id)
    .update(post)
}

function addNew (shoes, testDb) {
  const db = testDb || knex
  return db('shoes').insert(shoes)
}

function deleteOne (id, testDb) {
  const db = testDb || knex
  return db('shoes')
    .where('id', id).del()
}
