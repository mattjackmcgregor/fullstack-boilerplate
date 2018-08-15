const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  allBrands,
  getBrand,
  newBrand,
  editBrand,
  deleteBrand
}

function allBrands () {
  const db = knex
  return db('brand').select()
}

function getBrand (id) {
  const db = knex
  return db('brand')
    .where('id', id).select()
}

function newBrand (brand) {
  const db = knex
  return db('brand').insert(brand)
}

function editBrand (brand) {
  const db = knex
  return db('brand')
    .where('id', brand.id).update(brand)
}

function deleteBrand (id) {
  const db = knex
  return db('brand')
    .where('id', id).del()
}
