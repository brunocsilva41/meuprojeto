import { render, screen } from '@testing-library/react';
import App from './App';

test('renders USUARIOS NO BANCO heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/USUÁRIOS NO BANCO/i);
  expect(linkElement).toBeInTheDocument();
});

