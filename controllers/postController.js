const Post = require("../models/postModel");

exports.addPost = async (req, res, next) => {
	const { title, detail } = req.body;
	await Post.create({ title, detail });
	res.redirect("/");
};

exports.getPostById = async (req, res, next) => {
	let post = await Post.findById(req.params.postId);
	res.render("post", { post });
};

exports.getAllPosts = async (req, res, next) => {
	const posts = await Post.find({});
	res.render("index", { posts });
};

exports.updatePost = async (req, res, next) => {
	const { title, detail } = req.body;
	await Post.findByIdAndUpdate(req.params.postId, { title, detail });
	res.redirect("/");
};

exports.deletePost = async (req, res, next) => {
	await Post.findByIdAndDelete(req.params.postId);
	res.redirect("/");
};
