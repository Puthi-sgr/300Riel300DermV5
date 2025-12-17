import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../modules/home/index";
import ContactPage from "../modules/contact/view/ContactPage";
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
      },{
        path: "contact",
        element: <ContactPage />
      }
    ],
  },
  
]);

export default router;
