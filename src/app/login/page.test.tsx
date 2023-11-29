import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './page';

jest.mock('axios', () => ({
  _esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: { id: 1, name: 'Jerry' } })),
  },
}));

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

// control the inputs that they are empty
it('input should be empty', () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i) as HTMLInputElement;
  expect(userInputEl.value).toBe('');
});

it('input should be empty', () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/password/i) as HTMLInputElement;
  expect(passwordEl.value).toBe('');
});

// button should be disabled to avoid unnecessary requests when inputs are empty
it('button should be disabled', () => {
  render(<Login />);
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});

// error message should be invisible to the users
it('error message should be invisible', () => {
  render(<Login />);
  const message = screen.getByTestId('error');
  expect(message).toHaveClass('invisible');
});

// username input should be changed
it('username input should be changed', () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i) as HTMLInputElement;

  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });

  expect(userInputEl.value).toBe(testValue);
});

// password input should be changed
it('password input should be changed', () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/password/i) as HTMLInputElement;

  const testValue = 'test';

  fireEvent.change(passwordEl, { target: { value: testValue } });

  expect(passwordEl.value).toBe(testValue);
});

// button should not be disabled when inputs exist
it('button should not be disabled', () => {
  render(<Login />);
  const button = screen.getByRole('button');

  const userInputEl = screen.getByPlaceholderText(/username/i) as HTMLInputElement;
  const passwordEl = screen.getByPlaceholderText(/password/i) as HTMLInputElement;

  const testValue = 'test';

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passwordEl, { target: { value: testValue } });

  expect(button).not.toBeDisabled();
});

it('loading should not be rendered after fetching', async () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});

it('user should be rendered after fetching', async () => {
  render(<Login />);
  const buttonEl = screen.getByRole('button');
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = 'test';

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = await screen.findByText('Jerry');

  expect(userItem).toBeInTheDocument();
});
