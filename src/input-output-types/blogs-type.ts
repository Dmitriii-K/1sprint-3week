import { ObjectId } from "mongodb";

export type BlogViewModel = {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
  isMembership: boolean;
};
export type BlogDbType = {
  _id?: ObjectId;
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
  isMembership: boolean;
};

export type BlogInputModel = {
  name: string;
  description: string;
  websiteUrl: string;
};
