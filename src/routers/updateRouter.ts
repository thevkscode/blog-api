import express, { Request, Response } from "express";
import { blogPosts, BlogPost } from "./blogPosts";
const router = express.Router();
router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const postIndex = blogPosts.findIndex((post: BlogPost) => post.id === id);
  const { title, content } = req.body;
  if (postIndex === -1) {
    return res.status(404).json({ error: "post not found" });
  }
  blogPosts[postIndex] = { id, title, content };
  res.json(blogPosts[postIndex]);
});
export default router;
