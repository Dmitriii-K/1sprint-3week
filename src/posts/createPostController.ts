import { Request, Response } from "express";
import { dbPost } from "../db/db";
import { dbBlog } from "../db/db";
import { PostInputModel, PostDbType } from "../input-output-types/posts-type";
import { postCollection, blogCollection } from "../db/mongo-db";
import { WithId, ObjectId } from "mongodb";

const createDate = new Date().toISOString();

export const createPostController = async (
  req: Request<any, any, PostInputModel>,
  res: Response<any>
) => {
  const id = new ObjectId(req.body.blogId);
  const bi = await blogCollection.findOne({ _id: id });
  console.log(bi);
  console.log(id);

  // const blog = await dbBlog.blogs.find((blog) => blog.id === req.body.blogId);
  const newPost: PostDbType = {
    // id: Date.now().toString(),
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    content: req.body.content,
    blogId: req.body.blogId,
    blogName: bi!.name,
    createdAt: createDate,
  };
  const cp = await postCollection.insertOne(newPost);
  if (cp) {
    const z = {
      // id: Date.now().toString(),
      title: req.body.title,
      shortDescription: req.body.shortDescription,
      content: req.body.content,
      blogId: req.body.blogId,
      blogName: bi!.name,
      createdAt: createDate,
      id: cp.insertedId,
    };
    // dbPost.posts.push(newPost);
    res.status(201).json(z);
  } else {
    return;
  }
  // const z = {
  //       // id: Date.now().toString(),
  //       title: cp.title,
  //       shortDescription: req.body.shortDescription,
  //       content: req.body.content,
  //       blogId: req.body.blogId,
  //       blogName: bi!.name,
  //       createdAt: new Date().toISOString(),
  //   id: cp.insertedId,
  // };
  // // dbPost.posts.push(newPost);
  // res.status(201).json(z);
};
