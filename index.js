const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
if (process.env.NODE_ENV === 'development') require('dotenv').config()

const path = require('path');
const PORT = process.env.PORT || 5000;


/*
api 
*/



//middleware

if (process.env.NODE_ENV === "production") {
    // server static content
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(cors());
app.use(express.json());


app.get("/db", async(req,res) => {
    try {
        const data = await pool.query("SELECT * FROM main;");
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

app.listen(PORT, () => {
    console.log("Database_URL", process.env.DATABASE_URL);
    console.log(`Server has started on port ${PORT}`)
})
