const Post = require("../models/postModel");
const { ObjectId } = require("mongoose").Types;

exports.getEditPage = async (req, res, next) => {
	const post = await Post.findById(ObjectId(req.params.postId));
	res.render("edit", { post });
};

exports.getAddPage = (req, res, next) => {
	res.render("add_post");
};

exports.getAboutPage = (req, res, next) => {
	res.render("about");
};
