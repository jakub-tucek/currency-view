import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("Simple working test", () => {
  it("the title is visible", () => {
    const result = render(<App />);
    expect(result.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    const result = render(<App />);
    result.getByRole("button").click();
    expect(await result.findByText(/count is: 1/i)).toBeInTheDocument();
  });
});