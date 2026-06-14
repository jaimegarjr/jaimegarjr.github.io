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

  const expectedLinks = [
    ['LinkedIn', 'https://www.linkedin.com/in/jaime-garcia-jr/'],
    ['GitHub', 'https://github.com/jaimegarjr'],
    ['Personal Instagram', 'https://www.instagram.com/jaimegarjr/'],
    ['Drums Instagram', 'https://www.instagram.com/jaimedrumz'],
    ['TikTok', 'https://www.tiktok.com/@jaimegarjr'],
    ['YouTube', 'https://www.youtube.com/@jaimegarjr'],
    ['SoundCloud', 'https://www.soundcloud.com/jaimegarjr'],
    ['Bandcamp', 'https://jaimegarjr.bandcamp.com/'],
    ['Dribbble', 'https://dribbble.com/jaimegarciajr'],
  ];

  expectedLinks.forEach(([label, href]) => {
    expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href);
  });
});

test('groups professional and music profiles', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Software' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Music' })).toBeInTheDocument();
});

test('renders resume download', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Resumé' })).toHaveAttribute(
    'href',
    '/assets/Resume - Jaime Garcia Jr. (RECENT).pdf',
  );
});
