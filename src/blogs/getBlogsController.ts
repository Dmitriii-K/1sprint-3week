import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { BlogViewModel } from "../input-output-types/blogs-type";
import { blogCollection } from "../db/mongo-db";

export const getBlogsController = async (
  req: Request,
  res: Response<BlogViewModel | OutputErrorsType[]>
) => {
  const blogs = await blogCollection.find({});
  // const blogs = await dbBlog.blogs;
  res.status(200).json(blogs);
};
