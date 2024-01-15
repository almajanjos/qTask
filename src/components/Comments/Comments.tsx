import styles from "./styles.module.css";
import Toggler from "../Toggler/Toggler";
import withLog from "../../hoc/withLog";
import { CommentsProps } from "./Comments.type";
import { TogglerProps } from "../Toggler/Toggler.type";

function Comments({ postComments }: CommentsProps) {
  return (
    <>
      <Toggler>
        {({ show, toggle }: Parameters<TogglerProps["children"]>[0]) => {
          const commentsToRender = show ? postComments : postComments.slice(-2);
          return (
            <>
              <div onClick={toggle} className={styles.commentsToggler}>
                {show ? "Hide" : "Show"} all comments
              </div>
              {commentsToRender.map((comment) => {
                return (
                  <div
                    key={`${comment.id}_${comment.email}`}
                    className={styles.comment}
                  >
                    <span className={styles.commentAuthor}>
                      {comment.email}
                    </span>
                    {comment.body}
                  </div>
                );
              })}
            </>
          );
        }}
      </Toggler>
    </>
  );
}

Comments.displayName = "Comments";

export default withLog(Comments);
