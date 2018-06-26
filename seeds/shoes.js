exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoes').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoes').insert([
        {id: 1, brand: 'vans', size: 4},
        {id: 2, brand: 'converse', size: 5},
        {id: 3, brand: 'dr martens', size: 6}
      ])
    })
}
