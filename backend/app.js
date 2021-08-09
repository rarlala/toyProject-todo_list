const express = require('express');
const app = express();
const db = require("./db");
db.sequelize.sync();
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/lists", async (req,res) => {
    try {
        const lists = require("./models/list/controller");
        const result = await lists.findAll();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});