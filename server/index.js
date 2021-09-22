const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

/*
api 
*/

//middleware

app.use(cors());
app.use(express.json());

app.get("/", async(req,res) => {
    try {
        const data = await pool.query("SELECT * FROM main");
        res.json(data.rows)
    } catch (error) {
        console.error(error.message);
    }
});

app.get("/totalgp", async(req,res) => {
    try {
        const data = await pool.query("SELECT SUM(gp) as totalgp FROM main");
        res.json(data.rows)
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})
