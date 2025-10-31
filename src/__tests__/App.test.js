import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import '@testing-library/jest-dom';


test("renders heading and checkbox", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /select pizza toppings/i })).toBeInTheDocument();
  expect(screen.getByRole("checkbox", { name: /add pepperoni/i })).toBeInTheDocument();
});

test("initial toppings list contains only cheese", () => {
  render(<App />);
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
});

test("checkbox toggles pepperoni topping", async () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: /add pepperoni/i });

  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(screen.getByText("Pepperoni")).toBeInTheDocument();

  await userEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
});
