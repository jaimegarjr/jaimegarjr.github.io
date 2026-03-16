import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('vanta/dist/vanta.fog.min', () => ({
  default: () => ({ destroy: vi.fn() }),
}));

vi.mock('three', () => ({}));

test('renders name', () => {
  render(<App />);
  expect(screen.getByText('Jaime Garcia Jr.')).toBeInTheDocument();
});

test('renders title', () => {
  render(<App />);
  expect(screen.getByText('Software Engineer at Atlassian')).toBeInTheDocument();
});

test('renders social links', () => {
  render(<App />);
  expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
  expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
  expect(screen.getByLabelText('Dribbble')).toBeInTheDocument();
});

test('renders resume download', () => {
  render(<App />);
  expect(screen.getByText('Resume')).toBeInTheDocument();
});