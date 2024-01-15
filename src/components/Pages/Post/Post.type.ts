import { requestState } from "../../../constants/http";
import { CommentDTO } from "../../../types/comment";
import { PostDTO } from "../../../types/post";
import { UserDTO } from "../../../types/user";

interface PostParams {
  Post: PostDTO;
  Users: UserDTO[];
  PostComments: CommentDTO[];
  statusPost: requestState;
}

export type { PostParams };
