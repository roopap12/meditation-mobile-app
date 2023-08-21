import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for the "toBeInTheDocument" function
import Footer from "./Footer"; // adjust the path to your Footer component if necessary

describe("Footer component", () => {
  test("renders with correct content", () => {
    const { getByText } = render(<Footer />);

    // Check if the current year is displayed
    const currentYear = new Date().getFullYear().toString();
    expect(
      getByText(currentYear + " All rights reserved.")
    ).toBeInTheDocument();

    // Check if "By Roopa Patel" is displayed
    expect(getByText("By Roopa Patel")).toBeInTheDocument();
  });
});
