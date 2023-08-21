const express = require("express");
const router = express.Router();

const { createItem, items } = require("../controllers/item");

router.get("/ok", (req, res) => {
  res.json({
    message: "ok",
  });
});

router.post("/create", createItem);
router.get("/list", items);

module.exports = router;
