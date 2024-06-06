import { Request, Response } from "express";
import { dbPost } from "../db/db";

export const findPostController = async (req: Request, res: Response) => {
  const post = await dbPost.posts.find((p) => p.id === req.params.id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.sendStatus(404);
  }
};
