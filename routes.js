const express = require("express");
const router = express.Router();

const authorController = require("./src/controllers/authorController")
const blogController = require("./src/controllers/blogController")
const middleware = require("./src/authentication/auth")


router.post("/authors", authorController.createAuthor);

// router.post("/blogs", middleware.authentication, blogController.blogCreate);

// router.get("/blogs", middleware.authentication, blogController.getblog);

// router.delete("/blogs/:blogId", middleware.authentication, middleware.authorisation, blogController.deleted);

// router.delete("/blogs", middleware.authentication, middleware.md3, blogController.deletequery);

// router.put("/blogs/:blogId", middleware.authentication, middleware.authorisation, blogController.updateBlog);

router.post("/login", middleware.login);


module.exports = router;