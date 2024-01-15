import { lazy } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import withLog from "../../hoc/withLog";
import Redirect from "../Redirect/Redirect";

const Posts = lazy(() => import("../Pages/Posts/Posts"));
const Post = lazy(() => import("../Pages/Post/Post"));

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:postId" element={<Post />} />
      <Route path="*" element={<Redirect />} />
    </ReactRoutes>
  );
}

Routes.displayName = "Routes";

export default withLog(Routes);
