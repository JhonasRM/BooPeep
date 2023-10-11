const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  secret: process.env.APP_SECRET,
  env: process.env.NODE_ENV,
  token: process.env.JWT_SECRET,
  tokenTest: process.env.JWT_TEST_TOKEN,
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  sqlServer: {
    user: process.env.SQL_SERVER_USER,
    pwd: process.env.SQL_SERVER_PWD,
    host: process.env.SQL_SERVER_HOST,
    db: process.env.SQL_SERVER_DB,
  },
  salt: process.env.SALT_ROUNDS,
  databaseURL: process.env.DATABASE_URI,
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};