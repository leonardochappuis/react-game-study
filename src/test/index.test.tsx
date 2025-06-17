import { createRouter, RouterProvider } from "@tanstack/react-router";
import { render } from "@testing-library/react";
import { routeTree } from "../routeTree.gen";
import { act } from "react";
import { it, expect, describe } from "vitest";
import { Route } from "../routes/index.tsx";

describe("Index Tests", () => {
  it("creates a index route at /", () => {
    const router = createRouter({ defaultPendingMinMs: 0, routeTree });
    expect(Route.path).toBe("/");
    expect(router.routesById["/"]).toBeDefined();
  });

  it("renders heading in home page", async () => {
    const router = createRouter({ defaultPendingMinMs: 0, routeTree });

    const app = render(<RouterProvider router={router} />);

    await act(async () => {
      await router.navigate({ to: "/" });
    });

    const heading = app.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
