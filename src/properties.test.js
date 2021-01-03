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
