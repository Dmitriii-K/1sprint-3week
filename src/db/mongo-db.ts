import { SETTINGS } from "../settings";
import { PostViewModel } from "../input-output-types/posts-type";
import { BlogViewModel } from "../input-output-types/blogs-type";
import { Collection, Db, MongoClient, ObjectId } from "mongodb";
// ...

// получение доступа к бд
let client: MongoClient = new MongoClient(SETTINGS.MONGO_URL);
export let db: Db = client.db(SETTINGS.DB_NAME);

// получение доступа к коллекциям
export let blogCollection: Collection<BlogViewModel> =
  db.collection<BlogViewModel>(SETTINGS.BLOG_COLLECTION_NAME);
export let postCollection: Collection<PostViewModel> =
  db.collection<PostViewModel>(SETTINGS.POST_COLLECTION_NAME);

// проверка подключения к бд
export const connectDB = async () => {
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
