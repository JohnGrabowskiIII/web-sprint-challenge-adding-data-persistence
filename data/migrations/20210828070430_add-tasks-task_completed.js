
const {tasks, task_completed} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(tasks, table => {
      table.boolean(task_completed).notNullable().defaultsTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema.table(tasks, table => {
      table.dropColumn(task_completed)
  })
};
