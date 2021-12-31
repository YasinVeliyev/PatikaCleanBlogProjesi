const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();

const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	methodOverride("_method", {
		methods: ["POST", "GET"],
	}),
);

app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get("/post/edit/:postId", pageController.getEditPage);

app.get("/", postController.getAllPosts);
app.post("/add_post", postController.addPost);
app.get("/post/:postId", postController.getPostById);
app.put("/post/:postId", postController.updatePost);
app.delete("/post/:postId", postController.deletePost);

mongoose.connect(process.env["MONGO_URI"]).then(() => {
	app.listen(process.env.PORT || 5000, () => {
		console.info("Sunucu 5000 portunda başlatıldı ...");
	});
});
