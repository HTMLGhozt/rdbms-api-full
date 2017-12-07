// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/blog.db',
    },
    migrations: {
      tableName: 'migrations',
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'blog',
      user: 'root',
      password: 'root',
    },
    migrations: {
      tableName: 'migrations',
    },
  },
};
