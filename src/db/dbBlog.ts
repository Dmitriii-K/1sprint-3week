export type DBBlogType = {
  blogs: any[];
};

export const dbBlog: DBBlogType = {
  blogs: [],
};

const url =
  "mongodb+srv://capricorn:capricorn@cluster0.csgswii.mongodb.net/bloggers-platform?retryWrites=true&w=majority&appName=Cluster0";
