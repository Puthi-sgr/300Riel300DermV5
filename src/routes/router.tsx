import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../modules/home/index";
import ProjectsRoute from "./projects";

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
        element: <ProjectsRoute />,
      },
    ],
  },
]);

export default router;
