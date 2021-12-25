const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Post = require("./models/postModel");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
	const posts = await Post.find({});
	res.render("index", { posts });
});

app.get("/about", (req, res, next) => {
	res.render("about");
});
app.get("/add_post", (req, res, next) => {
	res.render("add_post");
});

app.post("/add_post", async (req, res, next) => {
	const { title, detail } = req.body;
	await Post.create({ title, detail });
	res.redirect("/");
});

app.get("/post/:postId", async (req, res, next) => {
	let post = await Post.findById(req.params.postId);
	res.render("post", { post });
});

mongoose.connect("mongodb://localhost:27017/cleanblog-test-db").then(() => {
	app.listen(5000, () => {
		console.info("Sunucu 5000 portunda başlatıldı ...");
	});
});
