import { Request, Response } from "express";
import { dbBlog } from "../db/db";

export const findBlogController = async (req: Request, res: Response) => {
  const blog = await dbBlog.blogs.find((b) => b.id === req.params.id);
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.sendStatus(404);
  }
};
