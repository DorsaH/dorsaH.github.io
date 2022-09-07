import { render, screen } from '@testing-library/react';
import App from './App';

// This test checks to see that a hyperlink is rendered with the expected url and text values
test('renders link', () => {
  render(<App />);
  const expectedLinkText = 'Who needs automation! Manual deploys for the win!';
  const expectedLinkUrl = 'https://www.youtube.com/watch?v=oHg5SJYRHA0'
  const linkElement = screen.getByText(expectedLinkText);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.closest('a')).toHaveAttribute('href', expectedLinkUrl);
});
