const Model = require('../models');
const Category = Model.Category;


const categoryCreate = async (req, res) => {
  try {
    const { name,code, status } = req.body;
    const categoryExist = await Category.findOne({ where: { name } }).catch(
      (err) => {
        console.log("error " + err);
      }
    );
    if (categoryExist) {
      return res.json({
        message: "this category already exist",
      });
    }
    await Category.create({
      name,
      code,
      status,
    });
    res.send("Category created successfully!");
   
  } catch (error) {
    console.error("Error creating Category:", error);
    res.status(500).send("Error creating Category");
  }
};


const categories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
  
    res.json(categories);
  } catch (error) {
    throw new Error("Error retrieving categories: " + error.message);
  }
};


module.exports = { categoryCreate, categories };