import { Link } from "react-router-dom";
import withLog from "../../hoc/withLog";
import styles from "./styles.module.css";
import Comments from "../Comments/Comments";
import { PostCardProps } from "./PostCard.type";

function PostCard({
  id,
  username,
  title,
  body,
  postComments = [],
}: PostCardProps) {
  return (
    <div className={styles.postCard}>
      <Link to={`/post/${id}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>{body}</div>
        <div className={styles.username}>by {username}</div>
      </Link>

      <Comments postComments={postComments} />
    </div>
  );
}
PostCard.displayName = "PostCard";
export default withLog(PostCard);
