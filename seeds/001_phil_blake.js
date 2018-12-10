'use strict'
/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('phil_blake').del()
    .then(() => {
      return knex('phil_blake').insert([{
        id: 1,
        name: 'Phillip Matthew Borgenicht',
        favorite_color: 'Green',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        name: 'Green',
        favorite_color: 'Blake Daniel Bollman',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('phil_blake_id_seq', (SELECT MAX(id) FROM phil_blake));"
      )
    })
}
