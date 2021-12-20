const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res, next) => {
	const blog = { id: 1, title: "Blog title", description: "Blog description" };
	res.render("index");
});

app.get("/about", (req, res, next) => {
	const blog = { id: 1, title: "Blog title", description: "Blog description" };
	res.render("about");
});
app.get("/add_post", (req, res, next) => {
	const blog = { id: 1, title: "Blog title", description: "Blog description" };
	res.render("add_post");
});

app.listen(5000, () => {
	console.info("Sunucu 5000 portunda başlatıldı ...");
});
