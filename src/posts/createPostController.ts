import { Request, Response } from "express";
import { dbPost } from "../db/db";
import { dbBlog } from "../db/db";
import { PostInputModel } from "../input-output-types/posts-type";

export const createPostController = async (
  req: Request<any, any, PostInputModel>,
  res: Response<any>
) => {
  const blog = await dbBlog.blogs.find((blog) => blog.id === req.body.blogId);
  const newPost = await {
    id: Date.now().toString(),
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    content: req.body.content,
    blogId: req.body.blogId,
    blogName: blog.name,
    createdAd: new Date(),
  };

  dbPost.posts.push(newPost);
  res.status(201).json(newPost);
};
