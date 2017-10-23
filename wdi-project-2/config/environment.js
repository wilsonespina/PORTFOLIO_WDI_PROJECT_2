module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  dbUri: process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2',
  sessionSecret: process.env.SESSION_SECRET || 'YghT5s617/1{%sDt'
};
