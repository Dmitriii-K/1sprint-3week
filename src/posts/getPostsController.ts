import { Request, Response } from "express";
import { dbPost } from "../db/db";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { postCollection } from "../db/mongo-db";

export const getPostsController = async (
  req: Request,
  res: Response<OutputErrorsType[]>
) => {
  const posts = await postCollection.find({});
  res.status(200).json(posts);
};
