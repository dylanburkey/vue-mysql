'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config')[env];
const db        = {};

//Create a Sequelize connection to the database using the URL in config/config.js
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  // url, username, password, config object
  var sequelize = new Sequelize(config.url, 'root', 'root', config);
}

//Load all the models
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//Export the db Object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


// P.S. no idea where this file gets called but it does run we start the server.