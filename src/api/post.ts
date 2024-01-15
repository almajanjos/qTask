import { PostDTO } from "../types/post";

const getPostById = ({ postId }: { postId: PostDTO["id"] }) =>
  `https://jsonplaceholder.typicode.com/posts/${postId}`;

const getPostComments = ({ postId }: { postId: PostDTO["id"] }) =>
  `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

const getPosts = () => "https://jsonplaceholder.typicode.com/posts";

export const PostApi = {
  getPostById,
  getPostComments,
  getPosts,
};
