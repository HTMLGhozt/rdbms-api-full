
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (tbl) => {
    tbl.increments('id');

    tbl
      .integer('userId')
      .references('id')
      .inTable('users')
      .notNullable();

    tbl
      .text('text')
      .notNullable();

    tbl
      .timestamp('created_at')
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
