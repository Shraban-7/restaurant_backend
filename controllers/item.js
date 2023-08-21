const Model = require("../models");
const Item = Model.Item;

const createItem = async (req, res) => {
  try {
    const { name, image, desc, in_stock, price, status, category_id } = req.body;

    const createItem = await Item.create({
      name,
      image,
      desc,
      in_stock,
      price,
      status,
      category_id,
    });

    console.log(createItem);
    
    res.send("create Item successfully!");
  } catch (error) {
    console.error("Error create Item:", error);
    res.status(500).send("Error creating Item");
  }
};

const items = async (req, res, next) => {
  try {
    const items = await Item.findAll();

    res.json(items);
  } catch (error) {
    throw new Error("Error retrieving items: " + error.message);
  }
};

module.exports = { createItem, items };
