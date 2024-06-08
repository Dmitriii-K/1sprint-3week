import { Request, Response } from "express";
import { dbPost } from "../db/db";
import {
  PostInputModel,
  PostViewModel,
} from "../input-output-types/posts-type";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { postCollection } from "../db/mongo-db";
import { WithId, ObjectId } from "mongodb";

export const updatePostController = async (
  req: Request<any, any, PostInputModel>,
  res: Response<PostViewModel | OutputErrorsType>
) => {
  // let updatePost;
  const id = new ObjectId(req.params.id);
  const post = await postCollection.updateOne(
    { _id: id },
    {
      $set: {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
      },
    }
  );
  // const post = await dbPost.posts.find((p) => p.id === req.params.id);
  if (!post) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
    // updatePost = post;
  }
  // updatePost.title = req.body.title;
  // updatePost.shortDescription = req.body.shortDescription;
  // updatePost.content = req.body.content;
  // updatePost.blogId = req.body.blogId;
  // res.sendStatus(204);
  return;
};
