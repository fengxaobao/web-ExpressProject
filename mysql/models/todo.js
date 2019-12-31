'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    name: DataTypes.STRING,
    dataline: DataTypes.STRING,
    context: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  ToDo.associate = function(models) {
    // associations can be defined here
  };
  return ToDo;
};