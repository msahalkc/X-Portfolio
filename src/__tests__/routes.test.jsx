import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import NotFound from "../components/NotFound";
import ProjectPage from "../components/ProjectPage";
import { products } from "../data/content";

const routes = [
  { path: "/", element: <App /> },
  { path: "/projects/:slug", element: <ProjectPage /> },
  { path: "*", element: <NotFound /> },
];

const renderAt = (path) => render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: [path] })} />);

beforeAll(() => {
  window.scrollTo = () => {};
});

describe("routes", () => {
  test("home links every project to its own page", () => {
    renderAt("/");
    for (const p of products) {
      const link = screen.getByRole("link", { name: new RegExp(`^${p.name}`) });
      expect(link).toHaveAttribute("href", `/projects/${p.slug}`);
    }
  });

  test.each(products.map((p) => [p.slug, p]))("/projects/%s shows that project", (slug, p) => {
    renderAt(`/projects/${slug}`);
    expect(screen.getByRole("heading", { level: 1, name: p.name })).toBeInTheDocument();
    expect(screen.getByText(p.why)).toBeInTheDocument();
    expect(document.title).toBe(`${p.name} · Muhammed Sahal K C`);
  });

  test("first and last projects only link one way", () => {
    renderAt(`/projects/${products[0].slug}`);
    expect(screen.queryByText("← Previous project")).not.toBeInTheDocument();
    expect(screen.getByText("Next project →")).toBeInTheDocument();
  });

  test("unknown project shows the 404 page", () => {
    renderAt("/projects/nope");
    expect(screen.getByRole("heading", { level: 1, name: "This page doesn't exist." })).toBeInTheDocument();
  });
});
