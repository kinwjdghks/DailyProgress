import mongoose, { Schema } from "mongoose";
import { Article } from "@/context/article-context";

export interface UserModel{
    nickname: string;
    id:string,
    password: string;
    IP:string;
    articleList: Article[];
}
const UserSchema = new Schema<UserModel>({
  nickname: String,
  id:String,
  password: String,
  IP: String,
  articleList: [
    {
      id: String,
      elapsedTime: Number,
      color: Number,
      key: Number,
    },
  ],
});

export const USER = mongoose.models?.USER || mongoose.model<UserModel>("USER", UserSchema);
 