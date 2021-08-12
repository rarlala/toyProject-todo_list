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

app.get("/list", async(req,res) => {
  try {
    const list = await db.List.findOne({
      where: { id: 2 }
    });
    res.send(list);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});