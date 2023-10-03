import express, { Request, Response } from "express";
import { blogPosts, BlogPost } from "./blogPosts";
const router = express.Router();
router.post("/", (req: Request, res: Response) => {
  const id: number = Date.now();
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(404).json({ error: "title and content required" });
  }
  const post: BlogPost = { id, title, content };
  blogPosts.push(post);
  res.status(201).json(post);
});
export default router;
