
exports.up = (knex, Promise) => {
  return knex.schema.createTable('shoes', table => {
    table.increments().primary()
    table.string('brand')
    table.integer('size')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shoes')
}
