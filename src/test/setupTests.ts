import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  // Clean up the DOM after each test to avoid memory leaks
  cleanup();
});
