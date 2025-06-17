import { createRouter, RouterProvider } from "@tanstack/react-router";
import { render } from "@testing-library/react";
import { routeTree } from "../routeTree.gen";
import { act } from "react";
import { it, expect, describe } from "vitest";

describe("Router Tests", () => {
  it("renders app with root route", async () => {
    const router = createRouter({ defaultPendingMinMs: 0, routeTree });

    const app = render(<RouterProvider router={router} />);

    await act(async () => {
      await router.navigate({ to: "/" });
    });

    expect(app).toBeTruthy();
  });
  it("navigates to about page", async () => {
    const router = createRouter({ defaultPendingMinMs: 0, routeTree });

    // const app = render(<RouterProvider router={router} />);

    await act(async () => {
      await router.navigate({ to: "/about" });
    });

    expect(router.__store.state.location.pathname).toBe("/about");
  });
});
