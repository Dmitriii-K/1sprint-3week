import { Request, Response } from "express";
import { dbPost } from "../db/db";
import { postCollection } from "../db/mongo-db";
import { WithId, ObjectId } from "mongodb";
import { postsMap } from "./getPostsController";

export const findPostController = async (req: Request, res: Response) => {
  const id = new ObjectId(req.params.id);
  const post = await postCollection.findOne({ _id: id });
  if (post) {
    const findPost = postsMap(post);
    res.status(200).json(findPost);
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
