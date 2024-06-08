import { Request, Response } from "express";
import { dbPost } from "../db/db";
import { postCollection } from "../db/mongo-db";

export const findPostController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const post = await postCollection.findOne({ id: id });
  if (post) {
    res.status(200).json(post);
  } else {
    res.sendStatus(404);
  }

  // const post = await dbPost.posts.find((p) => p.id === req.params.id);
  // if (post) {
  //   res.status(200).json(post);
  // } else {
  //   res.sendStatus(404);
  // }
};
