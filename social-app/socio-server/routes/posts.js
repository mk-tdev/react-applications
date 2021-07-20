import express from "express";
const router = express.Router();

import { createPosts, getPosts, updatePosts } from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);

export default router;
