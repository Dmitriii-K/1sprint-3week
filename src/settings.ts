import { config } from "dotenv";
config();

// mongoURI = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";
// console.log(process.env.MONGO_URL);

export const SETTINGS = {
  PORT: process.env.PORT || 3003,
  PATH: {
    BLOGS: "/blogs",
    POSTS: "/posts",
    TESTING: "/testing",
  },
  ADMIN: process.env.ADMIN || "admin:qwerty",
  MONGO_URL: process.env.MONGO_URL || "mongodb://0.0.0.0:27017",
  BLOG_COLLECTION_NAME: process.env.BLOG_COLLECTION_NAME,
  POST_COLLECTION_NAME: process.env.POST_COLLECTION_NAME,
  DB_NAME: process.env.DB_NAME,
};
