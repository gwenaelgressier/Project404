const router = require("express").Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer();
const {
  getOrigine,
  postOrigine,
} = require("../controllers/origine.controller");

//post
router.post("/", upload.single("file"), postController.createPost);
router.get("/", postController.readPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.get("/origine", getOrigine);
router.post("/origine", postOrigine);

// router.patch("/like-post/:id", postController.likePost);
// router.patch("/unlike-post/:id", postController.unlikePost);

//comment
router.patch("/comment-post/:id", postController.commentPost);
router.patch("/edit-comment-post/:id", postController.editCommentPost);
router.patch("/delete-comment-post/:id", postController.deleteCommentPost);

module.exports = router;
