import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import { BlogViewModel, BlogDbType } from "../input-output-types/blogs-type";
import { blogCollection } from "../db/mongo-db";
import { WithId, ObjectId } from "mongodb";
import { blogsMap } from "./getBlogsController";

export const findBlogController = async (req: Request, res: Response) => {
  const id = new ObjectId(req.params.id);
  const blog = await blogCollection.findOne({
    _id: id,
  });
  // const blog = await dbBlog.blogs.find((b) => b.id === req.params.id);
  if (blog) {
    const findBlog = blogsMap(blog);
    res.status(200).json(findBlog);
  } else {
    res.sendStatus(404);
  }
};
