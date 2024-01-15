import { CommentDTO } from "../../types/comment";
import { PostDTO } from "../../types/post";
import { UserDTO } from "../../types/user";

interface PostCardProps {
  id?: PostDTO["id"];
  username?: UserDTO["username"];
  title?: PostDTO["title"];
  body?: PostDTO["body"];
  postComments?: CommentDTO[];
}

export type { PostCardProps };
