import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import { BlogInputModel } from "../input-output-types/blogs-type";

export const createBlogController = async (
  req: Request<any, any, BlogInputModel>,
  res: Response<any>
) => {
  const newBlog = await {
    id: Date.now().toString(),
    name: req.body.name,
    description: req.body.description,
    websiteUrl: req.body.websiteUrl,
    createdAd: new Date(),
    isMembershi: false,
  };

  dbBlog.blogs.push(newBlog);
  res.status(201).json(newBlog);
};
