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
  let heading = await screen.getByText("Results");

  expect(heading).toBeInTheDocument();
});

// Test #1

const allpropertyIds = [1, 2, 3, 4];

allpropertyIds.forEach((propId) => {
  test(`Check if property with dataid={${propId}} exists in document`, async () => {
    let properties = await screen.findByTestId(propId);
    expect(properties).toBeInTheDocument();
  });
});

// Test #2

test("Add first property containing dataid=1 and confirm it exists in Saved properties", async () => {
  let firstProperty = await screen.getByTestId(1).getAttribute("data-testid");

  fireEvent.click(screen.getAllByText("Add")[0]);

  let savedProperties = await screen.getAllByLabelText("Saved properties")[0];

  expect(savedProperties.innerHTML).toContain(`data-testid="${firstProperty}"`);
});

// Test #3

test("Remove first peoperty in Saved properties containing dataid=4 and confirm it no longer exists in Saved properties", async () => {
  let firstSavedProperty = await screen
    .getByTestId(4)
    .getAttribute("data-testid");

  fireEvent.click(screen.getAllByText("Remove")[0]);

  let savedProperties = await screen.getAllByLabelText("Saved properties")[0];

  expect(savedProperties.innerHTML).not.toContain(
    `data-testid="${firstSavedProperty}"`
  );
});

// Test #4

test("Click on second property and confirm that it goes to single property page containing the correct dataid", async () => {
  fireEvent.click(screen.queryByLabelText("search-icon-2"));

  let paragraphText = await screen.getByText("number 2");

  expect(paragraphText).toBeInTheDocument();
});
