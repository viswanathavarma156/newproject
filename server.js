const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/tasks", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync("data.json"));
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync("data.json"));

  const task = {
    id: Date.now(),
    title: req.body.title
  };

  tasks.push(task);

  fs.writeFileSync("data.json", JSON.stringify(tasks, null, 2));

  res.json(task);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
