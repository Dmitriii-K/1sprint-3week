import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import { OutputErrorsType } from "../input-output-types/output-errors-type";

export const getBlogsController = async (
  req: Request,
  res: Response<OutputErrorsType[]>
) => {
  const blogs = await dbBlog.blogs;
  res.status(200).json(blogs);
};
