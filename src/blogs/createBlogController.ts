import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import {
  BlogInputModel,
  BlogViewModel,
  BlogDbType,
} from "../input-output-types/blogs-type";
import { blogCollection } from "../db/mongo-db";

export const createBlogController = async (
  req: Request<any, any, BlogInputModel>,
  res: Response<any>
) => {
  const newBlog = {
    // id: Date.now().toString(),
    name: req.body.name,
    description: req.body.description,
    websiteUrl: req.body.websiteUrl,
    createdAt: new Date().toISOString(),
    isMembership: false,
  };
  const nb = await blogCollection.insertOne(newBlog);
  const x = {
    ...newBlog,
    id: nb.insertedId,
  };

  // dbBlog.blogs.push(newBlog);
  res.status(201).json(x);
};
