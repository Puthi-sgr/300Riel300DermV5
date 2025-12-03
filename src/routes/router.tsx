import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../views/HomePage";
import ProjectDetailPage from "../views/ProjectDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects/:slug",
        element: <ProjectDetailPage />,
      },
    ],
  },
]);

export default router;
