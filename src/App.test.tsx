import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders port name", () => {
  render(<App />);
  const portElement = screen.getByText(/Klaipeda/i);

  expect(portElement).toBeInTheDocument();
});
