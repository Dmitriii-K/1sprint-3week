import { Request, Response } from "express";
import { Router } from "express";
import { dbBlog, dbPost } from "./db/db";

export const deleteRouter = Router();

deleteRouter.delete("/all-data", (req: Request, res: Response) => {
  dbPost.posts = [];
  dbBlog.blogs = [];
  res.sendStatus(204);
  console.log("All data is deleted");
});
