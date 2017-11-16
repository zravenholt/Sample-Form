exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
      table.string('email');
      table.string('firstName');
      table.string('lastName');
      table.integer('phone');
      table.string('streetAddress');
      table.string('city');
      table.string('state');
      table.integer('zip');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users');
};