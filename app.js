import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const dailyList = [];
const workList = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs", {list: dailyList});
});
app.get("/work", (req,res) => {
    res.render("work.ejs", {list: workList});
});

app.post("/", (req,res) => {
    const task = req.body["newTask"];
    dailyList.push(task);
    res.render("index.ejs", {newData: task, list: dailyList});
});

app.post("/work", (req,res) => {
    const task = req.body["newTask"];
    workList.push(task);
    res.render("work.ejs", {newData: task, list: workList});
});

app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}.`);
});
