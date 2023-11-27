/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import ClientComponent from './page';

// first test
it('App Router: Works with Client Components', () => {
  render(<ClientComponent />);
  const linkElement = screen.getByTestId('my-text');
  expect(linkElement).toBeInTheDocument();
});

// create another test here
it('render 3 list items', () => {
  render(<ClientComponent />);
  // li has default role and it is listitem
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3); // another way to check: expect(listItems.length).toBe(3)
});

// create another test
it('result should be 10', () => {
  render(<ClientComponent />);
  const title = screen.getByTitle('result');
  expect(title.textContent).toBe('10');
});
