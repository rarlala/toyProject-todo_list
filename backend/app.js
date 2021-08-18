const express = require('express');
const app = express();
const db = require("./db");
const cors = require("cors");
db.sequelize.sync();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/lists", async (req,res) => {
    try {
      const lists = await db.List.findAll();
      res.send(lists);
    } catch (error) {
      res.send(error);
    }
});

app.get("/list/:id", async(req,res) => {
  try {
    const list = await db.List.findOne({
      where: { id: req.params.id }
    });
    res.send(list);
  } catch (error) {
    res.send(error);
  }
});

app.post("/list", async(req,res) => {
  try {
    const list = await db.List.create(req.body);
    res.send(list);
  } catch (error) {
    res.send(error);
  }
});

app.put("/list/:id", async(req,res) => {
  try {
    const result = await db.List.update(req.body, {
      where: { id: req.params.id }
    });
    res.send(!!result[0]);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/list/:id", async(req,res) => {
  try {
    const isDeleted = await db.List.destroy({
      where: { id: req.params.id }
    });

    res.sendStatus(200);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});