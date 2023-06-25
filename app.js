const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/work", (req, res) => {
    res.render("work");
})

app.get("/blogs", (req, res) => {
    res.render("blogs");
})

app.get("/contacts", (req, res) => {
    res.render("contact");
})

app.listen(3000, () => {
    console.log("Server has started on PORT 3000.");
})