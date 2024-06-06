import { SETTINGS } from "../settings";
import { PostDBType } from "./db/
import {Collection, Db, MongoClient, ObjectId} from "mongodb";
// ...

// получение доступа к бд
let client: MongoClient = new MongoClient(SETTINGS.MONGO_URL);
export let db: Db = client.db(SETTINGS.DB_NAME);

// получение доступа к коллекциям
export let blogCollection: Collection<BlogDBType> = db.collection<BlogDBType>(
  SETTINGS.BLOG_COLLECTION_NAME
);
export let postCollection: Collection<PostDBType> = db.collection<PostDBType>(
  SETTINGS.POST_COLLECTION_NAME
);

// проверка подключения к бд
export const connectToDB = async () => {
  try {
    client = new MongoClient(SETTINGS.MONGO_URL);
    db = client.db(SETTINGS.DB_NAME);

    postCollection = db.collection(SETTINGS.POST_COLLECTION_NAME);
    blogCollection = db.collection(SETTINGS.BLOG_COLLECTION_NAME);

    await client.connect();
    console.log("connected to db");
    return true;
  } catch (e) {
    console.log(e);
    await client.close();
    return false;
  }
};
