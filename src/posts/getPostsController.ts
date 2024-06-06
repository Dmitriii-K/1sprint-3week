import { Request, Response } from "express";
import { dbPost } from "../db/db";
import { OutputErrorsType } from "../input-output-types/output-errors-type";

export const getPostsController = async (
  req: Request,
  res: Response<OutputErrorsType[]>
) => {
  const posts = await dbPost.posts;
  res.status(200).json(posts);
};
