import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

test("renders with the expected text", () => {
  const { getByText } = render(<Header />);
  const headerText = getByText("Meditate, Relax and Stay Focused!");
  expect(headerText).toBeInTheDocument();
});
