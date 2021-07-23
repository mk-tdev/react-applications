import express from "express";
const router = express.Router();

import {
  createPosts,
  getPosts,
  updatePosts,
  deletePost,
  likePost,
} from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.patch("/:id/likePost", likePost);
router.delete("/:id", deletePost);

export default router;
