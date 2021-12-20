const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
	const blog = { id: 1, title: "Blog title", description: "Blog description" };
	res.status(200).json(blog);
});

app.listen(3000, () => {
	console.info("Sunucu 3000 portunda başlatıldı ...");
});
