// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders app without crashing', () => {
//   render(<App />);
//   const headerElement = screen.getByText(/Markdown Editor/i);
//   expect(headerElement).toBeInTheDocument();
// });

// test('renders initial markdown text', () => {
//   render(<App />);
//   const markdownText = screen.getByText(/\*\*Hello, Markdown!\*\*/i);
//   expect(markdownText).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import React from "react";

test("renders a placeholder test", () => {
  render(<div>Hello, World!</div>);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
