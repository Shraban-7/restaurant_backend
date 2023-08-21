const express = require("express");
const router = express.Router();


const { categoryCreate, categories } = require("../controllers/category");

router.get("/ok", (req, res) => {
  res.json({
    message: "ok",
  });
});

router.post("/create", categoryCreate);
router.get("/list", categories);

module.exports = router;
