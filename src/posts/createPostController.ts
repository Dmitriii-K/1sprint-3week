import { Request, Response } from "express";
import { dbPost } from "../db/db";
import { dbBlog } from "../db/db";
import { PostInputModel, PostDbType } from "../input-output-types/posts-type";
import { postCollection } from "../db/mongo-db";

export const createPostController = async (
  req: Request<any, any, PostInputModel>,
  res: Response<any>
) => {
  const blog = await dbBlog.blogs.find((blog) => blog.id === req.body.blogId);
  const newPost: PostDbType = {
    // id: Date.now().toString(),
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    content: req.body.content,
    blogId: req.body.blogId,
    blogName: blog.name,
    createdAt: new Date().toISOString(),
  };
  const cp = await postCollection.insertOne(newPost);
  const z = {
    ...newPost,
    id: cp.insertedId,
  };
  // dbPost.posts.push(newPost);
  res.status(201).json(z);
};
