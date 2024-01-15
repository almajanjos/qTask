import withLog from "../../../hoc/withLog";
import {
  // default as withDataFetch,
  withDataFetchNEW,
} from "../../../hoc/withDataFetch";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import PostCard from "../../PostCard/PostCard";
import { requestState } from "../../../constants/http";
import { PostApi } from "../../../api/post";
import { CommentsApi } from "../../../api/comments";
import { UserApi } from "../../../api/user";
import { useMemo, useState } from "react";
import Input from "../../Input/Input";
import Spinner from "../../Spinner/Spinner";
import { CommentsMap, PostsProps, UsersMap } from "./Posts.type";

const Posts: React.FC<Partial<PostsProps>> = ({
  statusPosts,
  Posts = [],
  Users = [],
  Comments = [],
}) => {
  const [searchValue, setSearchValue] = useState("");

  const usersMap = useMemo(
    () =>
      Users.reduce((acc, user) => {
        const { id, ...restProps } = user;
        acc[id] = { id, ...restProps };
        return acc;
      }, {} as UsersMap),
    [Users]
  );

  const commentsMap = useMemo(
    () =>
      Comments.reduce((acc, comment) => {
        const { postId, ...restProps } = comment;

        if (!acc[postId]) {
          acc[postId] = [];
        }

        acc[postId].push({ postId, ...restProps });

        return acc;
      }, {} as CommentsMap),
    [Comments]
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  if (statusPosts === requestState.REJECTED)
    throw new Error("An error occurred while fetching posts.");

  if (statusPosts === requestState.PENDING)
    return (
      <div className={styles.postsPending}>
        <Spinner />
        Loading posts...
      </div>
    );

  return (
    <div>
      <div className={styles.inputWrapper}>
        <Input
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search post by username"
        />
      </div>
      <div className={styles.posts}>
        {Posts.filter((post) => {
          if (!searchValue) return true;
          const user = usersMap[post.userId];
          return searchValue.toLowerCase() === user?.username?.toLowerCase();
        }).map((post) => {
          const user = usersMap[post.userId];
          const postComments = commentsMap[post.id];

          return (
            <PostCard
              key={`${post.id}_${post.userId}`}
              id={post.id}
              username={user?.username}
              title={post.title}
              body={post.body}
              postComments={postComments}
            />
          );
        })}
      </div>
    </div>
  );
};

Posts.displayName = "Posts";

const PostsWithLog = withLog(Posts);

const PostsWithPostsData = withDataFetchNEW({
  key: "Posts",
  url: PostApi.getPosts,
})(PostsWithLog);

const PostsWithUsers = withDataFetchNEW({
  key: "Users",
  url: UserApi.getUsers,
})(PostsWithPostsData);

const PostsWithComments = withDataFetchNEW({
  key: "Comments",
  url: CommentsApi.getComments,
})(PostsWithUsers);

export default PostsWithComments;
