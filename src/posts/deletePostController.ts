import { Request, Response } from "express";
import { dbPost } from "../db/db";
import { postCollection } from "../db/mongo-db";

export const deletePostController = async (
  req: Request,
  res: Response<any>
) => {
  const id = req.params.id;
  const deletePost = await postCollection.deleteOne({ id: id });
  if (deletePost.deletedCount === 1) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }

  // const deletePost = await dbPost.posts.filter((p) => p.id !== id);
  // if (deletePost.length < dbPost.posts.length) {
  //   dbPost.posts = deletePost;
  //   res.sendStatus(204);
  // } else {
  //   res.sendStatus(404);
  // }
};
