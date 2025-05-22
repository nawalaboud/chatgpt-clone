import { render, screen } from '@testing-library/react';
import App from './App';

test('renders message input', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Type a message...');
  expect(input).toBeInTheDocument();
});

