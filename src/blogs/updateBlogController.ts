import { Request, Response } from "express";
import { dbBlog } from "../db/db";
import {
  BlogInputModel,
  BlogViewModel,
} from "../input-output-types/blogs-type";
import { OutputErrorsType } from "../input-output-types/output-errors-type";
import { blogCollection } from "../db/mongo-db";
import { blogsMap } from "./getBlogsController";
import { WithId, ObjectId } from "mongodb";

export const updateBlogController = async (
  req: Request<any, any, BlogInputModel>,
  res: Response<BlogViewModel | OutputErrorsType>
) => {
  // let updateBlog;
  const id = new ObjectId(req.params.id);
  const blog = await blogCollection.updateOne(
    { _id: id },
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
      },
    }
  );
  // const blog = await dbBlog.blogs.find((b) => b.id === req.params.id);
  if (!blog) {
    res.sendStatus(404);
  } else {
    res.sendStatus(204);
    // updateBlog = blog;
  }
  // updateBlog.name = req.body.name;
  // updateBlog.description = req.body.description;
  // updateBlog.websiteUrl = req.body.websiteUrl;

  // res.sendStatus(204);
  return;
};
