import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import { blogCollection } from "../db/mongo-db";
import { blogsMap } from "./getBlogsController";
import { WithId, ObjectId } from "mongodb";

export const deleteBlogController = async (
  req: Request,
  res: Response<any>
) => {
  const id = new ObjectId(req.params.id);
  const deleteBlog = await blogCollection.deleteOne({ _id: id });
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
