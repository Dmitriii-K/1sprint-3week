import { Request, Response } from "express";
import { Router } from "express";
import { dbBlog, dbPost } from "./db/db";
import { blogCollection, postCollection } from "./db/mongo-db";

export const deleteRouter = Router();

deleteRouter.delete("/all-data", async (req: Request, res: Response) => {
  await postCollection.drop();
  await blogCollection.drop();
  res.sendStatus(204);
  console.log("All data is deleted");
});
