const express = require("express");
const app = express();

const port = 3003;

app.get("/users", (req, res) => {
  res.json({ "users ": ["Tom", "Jack", "Mack"] });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
