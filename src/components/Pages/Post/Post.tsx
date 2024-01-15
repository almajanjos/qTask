import withLog from "../../../hoc/withLog";
import { withDataFetchNEW } from "../../../hoc/withDataFetch";
import PostCard from "../../PostCard/PostCard";
import { requestState } from "../../../constants/http";
import { PostApi } from "../../../api/post";
import { UserApi } from "../../../api/user";

import styles from "./styles.module.css";
import Spinner from "../../Spinner/Spinner";
import { PostParams } from "./Post.type";

function Post({
  Post,
  Users = [],
  PostComments = [],
  statusPost,
}: Partial<PostParams>) {
  const user = Users.find((user) => user.id === Post?.userId);

  if (statusPost === requestState.REJECTED) {
    throw new Error("An error occurred while fetching this post.");
  }

  if (statusPost === requestState.PENDING) {
    return (
      <div className={styles.postPending}>
        <Spinner />
        Loading posts...
      </div>
    );
  }

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <PostCard
          {...Post}
          postComments={PostComments}
          username={user?.username}
        />
      </div>
    </div>
  );
}

Post.displayName = "Post";

const PostWithLog = withLog(Post);

const PostById = withDataFetchNEW({
  key: "Post",
  // url: ({ postId }) => {
  //   return PostApi.getPostById({ postId })
  // },
  url: PostApi.getPostById,
})(PostWithLog);

const PostByIdWithComments = withDataFetchNEW({
  key: "PostComments",
  // url: ({ postId }) => {
  //   return PostApi.getPostComments({ postId })
  // },
  url: PostApi.getPostComments,
})(PostById);

const PostByIdWithCommentsAndUsers = withDataFetchNEW({
  key: "Users",
  // url: ({ postId }) => {
  //   return PostApi.getPostComments({ postId })
  // },
  url: UserApi.getUsers,
})(PostByIdWithComments);

export default PostByIdWithCommentsAndUsers;
