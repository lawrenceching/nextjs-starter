import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ServerExample } from "./ServerExample";

vi.mock("next-intl/server", () => {
  return {
    getTranslations: async () => (key: string) => key,
  };
});

describe("ServerExample", () => {
  it("renders a stable server time string", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-01-01T00:00:00.000Z"));

    const el = await ServerExample();
    render(el);

    expect(screen.getByText(/serverTime:/)).toBeInTheDocument();
    expect(screen.getByText("2025-01-01T00:00:00.000Z")).toBeInTheDocument();

    vi.useRealTimers();
  });
});


