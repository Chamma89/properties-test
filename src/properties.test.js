import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { PropertyProvider } from "./context/property_context";

beforeEach(() => {
  render(
    <PropertyProvider>
      <App />
    </PropertyProvider>
  );
});

// Quick demo to check tests are working

test(`Find "Results" heading`, async () => {
  let heading = await screen.findAllByText("Results");

  expect(heading).toBeTruthy();
});

// Check via dataid that all properties on page are visible

const allropertyIds = [1, 2, 3, 4, 5];

allropertyIds.forEach((propId) => {
  test(`Check if property with dataid={${propId}} exists in document`, async () => {
    let properties = await screen.findByTestId(propId);
    expect(properties).toBeInTheDocument();
  });
});
