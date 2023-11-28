import { render, screen } from '@testing-library/react';
import Login from './page';

// check elements in DOM

it('username input should be rendered', () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

it('password input should be rendered', () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  expect(passwordEl).toBeInTheDocument();
});

it('button should be rendered', () => {
  render(<Login />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
