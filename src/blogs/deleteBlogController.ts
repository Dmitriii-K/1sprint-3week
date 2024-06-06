import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import { blogCollection } from "../db/mongo-db";

export const deleteBlogController = async (
  req: Request,
  res: Response<any>
) => {
  const id = req.params.id;
  const deleteBlog = await blogCollection.deleteOne({ id });
  if (deleteBlog.deletedCount === 1) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
  // const deleteBlog = await dbBlog.blogs.filter((b) => b.id !== id);
  // if (deleteBlog.length < dbBlog.blogs.length) {
  //   dbBlog.blogs = deleteBlog;
  //   res.sendStatus(204);
  // } else {
  //   res.sendStatus(404);
  // }
};
