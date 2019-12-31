require('dotenv/config');
module.exports = { 

  development: {
    dialect: 'sqlite3',
    storage: './src/storage/database.sqlite'
  },
  production: {
    dialect: 'sqlite3',
    storage: './src/storage/database.sqlite'
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};