import express from "express";
const router = express.Router();

import { createPosts, getPosts } from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPosts);

export default router;
