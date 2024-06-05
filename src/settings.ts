import { config } from "dotenv";
config();

export const mongoURI = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";
console.log(process.env.MONGO_URL);

export const SETTINGS = {
  PORT: process.env.PORT || 3003,
  PATH: {
    BLOGS: "/blogs",
    POSTS: "/posts",
  },
  ADMIN: process.env.ADMIN || "admin:qwerty",
};
