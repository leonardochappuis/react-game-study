// e2e/index.spec.ts
import { test, expect } from "@playwright/test";

test("heading is vertically & horizontally centered", async ({ page }) => {
  await page.goto("http://localhost:5173/"); // dev server or built app

  const heading = page.getByRole("heading", { name: "Welcome Home!" });
  const box = await heading.boundingBox();
  const viewport = page.viewportSize();

  expect(box).not.toBeNull();
  if (!box || !viewport) {
    throw new Error("Bounding box or viewport size is null");
  }
  const vCenter = Math.abs(box.y + box.height / 2 - viewport!.height / 2);
  const hCenter = Math.abs(box.x + box.width / 2 - viewport!.width / 2);

  expect(vCenter).toBeLessThan(4); // ≤4 px tolerance
  expect(hCenter).toBeLessThan(4);
});
