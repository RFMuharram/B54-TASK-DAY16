'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_blog.init({
    tittle: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_blog',
  });
  return tb_blog;
};