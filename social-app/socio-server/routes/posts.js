import express from "express";
const router = express.Router();

import { createPosts, getPosts, updatePosts, deletePost } from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePost);

export default router;
