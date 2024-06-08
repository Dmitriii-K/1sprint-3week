import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import { BlogViewModel, BlogDbType } from "../input-output-types/blogs-type";
import { blogCollection } from "../db/mongo-db";
import { WithId } from "mongodb";

export const findBlogController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const blog = await blogCollection.findOne({
    id: id,
  });
  // const blog = await dbBlog.blogs.find((b) => b.id === req.params.id);
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.sendStatus(404);
  }
};
