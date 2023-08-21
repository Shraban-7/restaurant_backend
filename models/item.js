'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Category, {
        foreignKey: "category_id",
      });
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      desc: DataTypes.TEXT,
      in_stock: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(10, 2),
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};