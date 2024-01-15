import { PostDTO } from "./post";

type CommentDTO = {
  postId: PostDTO["id"];
  id: number;
  name: string;
  email: string;
  body: string;
};

export type { CommentDTO };
