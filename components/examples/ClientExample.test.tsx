import { render, screen, fireEvent } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { describe, expect, it } from "vitest";

import { ClientExample } from "./ClientExample";

describe("ClientExample", () => {
  it("increments the count when clicking the button", () => {
    render(
      <NextIntlClientProvider
        locale="en"
        messages={{
          ClientExample: {
            count: "Count",
            increment: "Increment",
          },
        }}
      >
        <ClientExample />
      </NextIntlClientProvider>
    );

    expect(screen.getByText(/Count:/)).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});


