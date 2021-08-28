
const {tasks, task_notes} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(tasks, table => {
      table.string(task_notes, 400)
  })
};

exports.down = function(knex) {
  return knex.schema.table(tasks, table => {
      table.dropColumn(task_notes)
  })
};
