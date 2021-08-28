
const {tasks, task_description} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(tasks, table => {
      table.string(task_description, 400).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.table(tasks, table => {
      table.dropColumn(task_description)
  })
};
