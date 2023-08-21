require('dotenv').config();
const express = require("express");
const port = process.env.PORT||4000;
; // You can change this to any port you prefer

const categoryApi = require("./api/category");
const itemApi = require("./api/item");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use('/api/category/',categoryApi);
app.use('/api/item/',itemApi);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
