'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('phil_blake', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('favorite_color').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('phil_blake')
}
