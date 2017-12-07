exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments('id');

    tbl
      .string('name', 125)
      .notNullable()
      .unique('name', 'uq_username');

    tbl
      .timestamp('created_at')
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
