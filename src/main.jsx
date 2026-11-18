import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";
import ProjectPage from "./components/ProjectPage";
import "./styles/global.css";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  { path: "/projects/:slug", element: <ProjectPage />, errorElement: <NotFound /> },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
);
