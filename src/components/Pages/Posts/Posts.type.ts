import { requestState } from "../../../constants/http";
import { CommentDTO } from "../../../types/comment";
import { PostDTO } from "../../../types/post";
import { UserDTO } from "../../../types/user";

interface PostsProps {
  statusPosts: requestState;
  Posts: PostDTO[];
  Users: UserDTO[];
  Comments: CommentDTO[];
}

type UsersMap = Record<UserDTO["id"], UserDTO>;

type CommentsMap = Record<CommentDTO["id"], CommentDTO[]>;

export type { PostsProps, UsersMap, CommentsMap };
