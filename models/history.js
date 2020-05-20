'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    city: DataTypes.STRING,
    ip: DataTypes.STRING,
    response: DataTypes.TEXT
  }, {});
  History.associate = function(models) {
    // associations can be defined here
  };
  return History;
};