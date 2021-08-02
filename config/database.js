module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: process.env. database__client,
        host: process.env. database__connection__host,
        port: process.env.int('DATABASE_PORT', 5432),
        database: process.env.database__connection__database,
        username: process.env.database__connection__user,
        password: process.env.database__connection__password,
        ssl: {
          //rejectUnauthorized: process.env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {},
    },
  },
});
